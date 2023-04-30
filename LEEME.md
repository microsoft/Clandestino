# CLANDESTINO

_For English, click [here](./README.md)._

Este es el repositorio de CLANDESTINO, el conjunto de datos de lenguaje tóxico en español. El español la lengua materna de casi 500 mil millones de personas en más de 40 países. Esto hace la detección de lenguaje tóxico en español muy difícil: una cobertura general podría causar olvido o borradura (_erasure_), dado que palabras ofensivas en un país podrán no ser ofensivas en otro. Por otro lado, una cobertura insuficiente va a causar daño, exclusión, y perpetuar estereotipos acerca de algo o alguien.

Aparte, la naturaleza fonética del español implica que hay muchas maneras de escribir la misma palabra. Muchas soluciones de hoy solo usan estadísticas o texto, y no toman esto en cuenta. Añade a eso matices culturales de la Hispanoesfera (como el legado que dejaron el colonialismo y el imperialismo) y es obvio que el nivel de toxicidad y ofensa que un texto tenga serán medidos de manera diferente a la de un texto en inglés de EE.UU. En otras palabras, sería muy inexacto asumir que todos los países hispanoablantes son un monolito cultural.

CLANDESTINO es un conjunto de datos diseñado para la detección de lenguage tóxico, incluyendo los puntos anteriores. Está diseñado para actuar como una semilla para hacer más síntesis de datos. Tiene las siguientes características:
- Anotación por hablantes nativos, de siete países.
- Cobertura extensiva (pero no exaustiva, ve [abajo](#consideraciones-respecto-a-responsable-ia)) de múltiple categorías tóxicas (p.ej. discurso de odio, microagresiones, estereotipos positivos, autolesiones, disinformación) y grupos tradicionalmente considerados vulnerables en general y en la Hispanoesfera.
- Cobertura de discurso informal (p.ej., ortografía comúnmente encontrada en el internet) y formal. 
- Inclusión de lenguaje específico a cada región, incluyendo anotaciones para éstas. 
- Una combinación de texto tóxico generado por IA y por seres humanos, y etiquetado como tal.

**NOTA: Este repositorio contiene y discute contenido que puede ser ofensivo o causar angustia. Todos los materiales de este repositorio son solamente para ayudar en la investigación de mejores métodos para detectar la toxicidad. Los ejemplos incluidos en este repositorio no representan los sentimientos de los autores o sus auspiciadores hacia cualquier grupo.**


## Actualizaciones
_Manténte al corriente! Este corpus está siendo actualizado constantemente._

- 1° de mayo, 2023: Lanzamos la primera versión de CLANDESTINO! 


## Referencias

Si usas CLANDESTINO en tu trabajo, por favor considera citar nuestro papel:


```
TBD
```


## Consideraciones respecto a responsable IA

> Nota que todavía hay mucho que este conjunto de datos no captura con relación a lo que es el lenguaje problemático en español. 
> Nuestras anotaciones probablemente no capturan la complejidad de estos problemas. El lenguaje problemático depende del contexto y la cultura, y también es dinámico y puede manifestarse en muchas formas y severidades diferentes. El lenguaje problemático es, fundamentalmente, un problema centrado en los seres humanos, y debería ser estudiado en conjunción con la experiencia humana. Hay una gran necesidad de hacer investigación multidisciplinaria para entender mejor estos aspectos.

> También nota que este corpus solo captura toxicidad en una manera que no es exaustiva. Debido a su gran tamaño, también va a tener errores (_noise_). Nuestra meta en este proyecto es proveer a la comunidad los medios para mejorar la detección de toxcicidad en español a través de muchas regiones, y por ende <ins>este corpus y modelos entrenados con él van a tener limitaciones</ins>. 
> Estas limitaciones pueden y deberán ser el tema de investigación subsecuente. 


## Contribuciones

Ve [aquí](./README.md) (en inglés).

## Marcas

Ve [aquí](./README.md) (en inglés).
