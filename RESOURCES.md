# AI/ML in Banking & Finance — Resources

## Knowledge

### Credit Risk
- [Credit Risk Analytics — Baesens, Roesch, Scheule (Wiley, 2016)](https://www.wiley.com/en-us/Credit+Risk+Analytics-p-9781119143987)
  The authoritative textbook on ML for PD/LGD/EAD. Use for: feature engineering, scorecard building, model comparison.
- [BIS Working Paper: Machine learning in credit risk (BIS WP 2019)](https://www.bis.org/publ/work765.htm)
  Central bank researchers compare ML vs logistic regression on real loan data. Use for: evidence-based claims about XGBoost vs LR.
- [Interpretable Machine Learning — Christoph Molnar (free online)](https://christophm.github.io/interpretable-ml-book/)
  Best single source on SHAP, LIME, PDPs. Use for: explainability under regulatory scrutiny.

### Model Risk Management
- [SR 11-7: Guidance on Model Risk Management (Federal Reserve / OCC, 2011)](https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm)
  The foundational US regulatory guidance for model risk. Use for: MRM framework, model lifecycle, validation requirements.
- [SS1/23: Model Risk Management (PRA, Bank of England, 2023)](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks)
  UK equivalent of SR 11-7, updated for ML/AI. Use for: UK-specific governance, principle-based MRM for ML.
- [ECB Guide on Internal Models (2019)](https://www.ecb.europa.eu/pub/pdf/other/ecb.guidelinesinternalmodels201910~a51a4f7db3.en.pdf)
  Use for: European regulatory expectations on credit risk models under IRBA.

### Market Risk
- [FRTB — Basel Committee on Banking Supervision (2019)](https://www.bis.org/bcbs/publ/d457.htm)
  The primary source for FRTB rules including NMRF. Use for: regulatory context for ML in market risk.
- [Risk.net: Machine Learning in Market Risk (various)](https://www.risk.net/tag/machine-learning)
  Practitioner-level articles on ML for VaR, ES, stress testing. Use for: applied industry examples.

### Fraud & AML
- [IEEE Symposium on Computational Intelligence in Financial Engineering](https://ieeexplore.ieee.org/xpl/conhome/1000055/all-proceedings)
  Academic source for fraud detection methods. Use for: recall/precision trade-off, autoencoder approaches.
- [FATF Guidance: Opportunities and Challenges of New Technologies for AML/CFT (2021)](https://www.fatf-gafi.org/publications/financialcrimecovid19/documents/opportunities-challenges-new-technologies-for-aml-cft.html)
  Use for: regulatory framing of AI/ML in AML/CFT.

## Wisdom (Communities)

- [Risk.net Forums](https://www.risk.net/community)
  Practitioner community for quants and risk professionals. High signal-to-noise.
- [r/quant — Reddit](https://www.reddit.com/r/quant/)
  Quantitative finance community. Use for: real-world ML-in-finance discussions, sanity checks.
- [QuantLib mailing list / GitHub](https://github.com/lballabio/QuantLib)
  For implementation-level questions around financial models.
- [LinkedIn: Model Risk Management group](https://www.linkedin.com/groups/)
  Search "Model Risk Management" — active group of MRM practitioners.

## Gaps
- Need a high-quality, freely-accessible resource specifically on XGBoost applied to PD modelling with real financial data
- Need a practitioner case study on FRTB-NMRF with ML imputation
