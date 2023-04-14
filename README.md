# CLANDESTINO

This is the repository for CLANDESTINO, the Spanish toxic language dataset. Spanish is spoken by almost half a billion people in over 40 countries as a first language. This makes toxic language detection challenging: blanket detection could cause erasure (a term offensive in one locale might not be offensive in another), but underblocking can cause harm and perpetuate stereotypes.

Additionally, the phonetic nature of Spanish means that there are multiple ways to spell the same word--and statistical, text-only approaches fail to account for this. 
Cultural nuances of the Hispanosphere also play an important role: the legacy of colonialism and imperialism means that offensiveness and toxicity are measured with a different bar than that of US-based speech. Furthermore, it would be inaccurate to consider all Spanish-speaking countries as a cultural monolith.

CLANDESTINO is a corpus designed for toxic-language detection, bearing in mind the points above. It is meant to also act as a seed for further data synthesization, and has the following features:
- Native speaker annotation, spanning 48 countries. 
- Extensive (yet non-exhaustive, see [below](#responsible-ai-considerations)) coverage across multiple toxic categories (e.g., hate speech, microaggressions, positive stereotyping, self-harm, disinformation) and groups both traditionally considered vulnerable as well as those specific to the Hispanosphere.
- Coverage of both informal speech (e.g., text-based spelling) and formal speech.
- Inclusion of locale-specific language, along with locale tags.
- A combination of AI and human-generated toxic content, and labelled as such.

**WARNING: This repository contains and discusses content that is offensive or upsetting. All materials are intended to support research that improves toxicity detection methods. Included examples of toxicity do not represent how the authors or sponsors feel about any identity groups.**

## Citation

If you use CLANDESTINO in your work, please consider citing our paper:

```
TBD
```


## Responsible AI Considerations

Please also note that there is still a lot that this dataset is not capturing about what constitutes problematic language in Spanish. 
Our annotations might not capture the full complexity of these issues, given problematic language is context-and-culture-dependent, dynamic, and can manifest in different forms and different severities. Problematic language is also fundamentally a human-centric problem and should be studied in conjunction with human experience. There is need for multi-disciplinary work to better understand these aspects. Also note that this dataset only captures toxicity in a non-exhaustive manner, and due to its large scale can naturally be noisy. Our goal in this project is to provide the community with means to improve toxicity detection in Spanish across multiple locales, and there exists limitations to this dataset and models trained on it. 
These limitations can and should be the subject of future research.


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
