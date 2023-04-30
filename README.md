# CLANDESTINO

_Para español, [ve aquí](./LEEME.md)_

This is the repository for CLANDESTINO, the Spanish toxic language dataset. Spanish is spoken by almost half a billion people in over 40 countries as a first language. This makes toxic language detection challenging: blanket detection could cause erasure (a term offensive in one locale might not be offensive in another), but underblocking can cause harm and perpetuate stereotypes.

Additionally, the phonetic nature of Spanish means that there are multiple ways to spell the same word. Statistical, text-only approaches fail to account for this. 
Cultural nuances of the Hispanosphere also play an important role: the legacy of colonialism and imperialism means that offensiveness and toxicity are measured with a different bar than that of US-based speech; and it varies considerably over locales.
Hence, it would be inaccurate to consider all Spanish-speaking countries as a cultural monolith.

CLANDESTINO is a corpus designed for toxic-language detection, bearing in mind the points above. It is meant to also act as a seed for further data synthesization, and has the following features:
- Native speaker annotation, spanning seven countries. 
- Extensive (yet non-exhaustive, see [below](#responsible-ai-considerations)) coverage across multiple toxic categories (e.g., hate speech, microaggressions, positive stereotyping, self-harm, disinformation) and groups both traditionally considered vulnerable as well as those specific to the Hispanosphere.
- Coverage of both informal speech (e.g., text-based spelling) and formal speech.
- Inclusion of locale-specific language, along with locale tags.
- A combination of AI and human-generated toxic content, and labelled as such.

**WARNING: This repository contains and discusses content that is offensive or upsetting. All materials are intended to support research that improves toxicity detection methods. Included examples of toxicity do not represent how the authors or sponsors feel about any identity groups.**


## Updates
_Stay tuned for updates since this corpus is actively under development_

- May 1st: CLANDESTINO's first version released! 


## Citation

If you use CLANDESTINO in your work, please consider citing our paper:


```
TBD
```


## Responsible AI Considerations

>Note that there is still a lot that this dataset is not capturing about what constitutes problematic language in Spanish. 
>Our annotations might not capture the full complexity of these issues, given problematic language is context-and-culture-dependent, dynamic, and can manifest in different forms and different severities. Problematic language is also fundamentally a human-centric problem and should be studied in conjunction with human experience. There is need for multi-disciplinary work to better understand these aspects.

>Also note that this dataset only captures toxicity in a non-exhaustive manner, and due to its large scale can naturally be noisy. Our goal in this project is to provide the community with means to improve toxicity detection in Spanish across multiple locales, and <ins>there exists limitations to this dataset and models trained on it</ins>. 
>These limitations can and should be the subject of future research.


## Contributing & Trademarks

See [here](./CONTRIBUTING.md)
