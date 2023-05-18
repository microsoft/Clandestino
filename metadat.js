function toToxic(json) {
    return cast(JSON.parse(json), r("Toxic"));
}

function toxicToJson(value) {
    return JSON.stringify(uncast(value, r("Toxic")), null, 2);
}

function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val, typ, getProps, key = '', parent = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}

function l(typ) {
    return { literal: typ };
}

function a(typ) {
    return { arrayItems: typ };
}

function u(...typs) {
    return { unionMembers: typs };
}

function o(props, additional) {
    return { props, additional };
}

function m(additional) {
    return { props: [], additional };
}

function r(name) {
    return { ref: name };
}

const typeMap = {
    "Toxic": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "doi", js: "doi", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
        { json: "created", js: "created", typ: u(undefined, "") },
        { json: "licenses", js: "licenses", typ: u(undefined, a(r("License"))) },
        { json: "sources", js: "sources", typ: u(undefined, a("any")) },
        { json: "resources", js: "resources", typ: u(undefined, a(r("Resource"))) },
        { json: "contributors", js: "contributors", typ: u(undefined, a(r("Contributor"))) },
        { json: "privacy", js: "privacy", typ: u(undefined, a(r("Privacy"))) },
        { json: "security", js: "security", typ: u(undefined, a("any")) },
        { json: "procedures", js: "procedures", typ: u(undefined, r("Procedures")) },
        { json: "use", js: "use", typ: u(undefined, a("any")) },
    ], false),
    "Contributor": o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "path", js: "path", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "role", js: "role", typ: u(undefined, "") },
    ], false),
    "License": o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "path", js: "path", typ: u(undefined, "") },
    ], false),
    "Privacy": o([
        { json: "notice", js: "notice", typ: u(undefined, r("Confidentiality")) },
        { json: "useTerms", js: "useTerms", typ: u(undefined, r("Confidentiality")) },
        { json: "sensitivity", js: "sensitivity", typ: u(undefined, r("Sensitivity")) },
        { json: "confidentiality", js: "confidentiality", typ: u(undefined, r("Confidentiality")) },
        { json: "assessments", js: "assessments", typ: u(undefined, a("any")) },
    ], false),
    "Confidentiality": o([
        { json: "path", js: "path", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
    "Sensitivity": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "types", js: "types", typ: u(undefined, a("any")) },
    ], false),
    "Procedures": o([
        { json: "collection", js: "collection", typ: u(undefined, a("any")) },
        { json: "processing", js: "processing", typ: u(undefined, a("any")) },
        { json: "update", js: "update", typ: u(undefined, a("any")) },
    ], false),
    "Resource": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "path", js: "path", typ: u(undefined, "") },
        { json: "doi", js: "doi", typ: u(undefined, "") },
        { json: "format", js: "format", typ: u(undefined, "") },
        { json: "mediatype", js: "mediatype", typ: u(undefined, "") },
        { json: "bytes", js: "bytes", typ: u(undefined, "") },
        { json: "date", js: "date", typ: u(undefined, Date) },
        { json: "encoding", js: "encoding", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
        { json: "language", js: "language", typ: u(undefined, "") },
        { json: "schema", js: "schema", typ: u(undefined, a(r("Schema"))) },
        { json: "dialect", js: "dialect", typ: u(undefined, r("Dialect")) },
    ], false),
    "Dialect": o([
    ], false),
    "Schema": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
    ], false),
};

module.exports = {
    "toxicToJson": toxicToJson,
    "toToxic": toToxic,
};
