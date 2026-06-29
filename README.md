# AI/ML in Banking & Finance

A structured, self-contained curriculum covering machine learning applications across every major model domain in financial services — written for practitioners who already know the ML toolkit and want to develop dual expertise as both a **technical ML engineer** and a **risk & governance lead**.

## Read the curriculum

| Format | Link |
|--------|------|
| **GitHub Pages** (recommended) | [rajesh-nair.github.io/AIMODELS4FINANCE](https://rajesh-nair.github.io/AIMODELS4FINANCE/) |
| **HTML Preview** (fallback) | [htmlpreview.github.io](https://htmlpreview.github.io/?https://github.com/Rajesh-Nair/AIMODELS4FINANCE/blob/main/index.html) |

---

## What this covers

28 lessons across 10 domains. Each lesson pairs **technical ML depth** with **risk governance and regulatory context** — covering not just how the models work but what can go wrong, how regulators scrutinise them, and what model risk management requires.

### Module 1 · Credit Risk
| # | Lesson | Key concepts |
|---|--------|-------------|
| 01 | [PD Modelling](lessons/0001-credit-risk-pd-modelling.html) | XGBoost vs scorecard, Gini coefficient, SHAP, SR 11-7 lifecycle |
| 02 | [LGD Estimation](lessons/0002-lgd-estimation.html) | Bimodal distribution, two-stage model, downturn LGD, right-censoring |
| 03 | [EAD Forecasting](lessons/0003-ead-forecasting.html) | CCF formula, revolving facility drawdown, panic draw, reference date |
| 04 | [Credit Scoring & Alternative Data](lessons/0004-credit-scoring-alt-data.html) | Alt data taxonomy, proxy variable risk, four-fifths rule, PSI monitoring |

### Module 2 · Market Risk
| # | Lesson | Key concepts |
|---|--------|-------------|
| 05 | [VaR & Expected Shortfall](lessons/0005-var-es-market-risk.html) | GARCH(1,1), fat tails, FRTB ES@97.5%, backtesting traffic-light zones |
| 06 | [FRTB & NMRF](lessons/0006-frtb-nmrf.html) | 24 RPO/year test, SES vs IMA capital, PCA factor decomposition |
| 07 | [Algo Trading Signal Generation](lessons/0007-algo-trading-signals.html) | IC/ICIR, walk-forward validation, purge gaps, kill switch governance |
| 08 | [CCAR & Stress Testing](lessons/0008-ccar-stress-testing.html) | Satellite models, GAN scenario generation, SR 15-18, overlay governance |

### Module 3 · Financial Crime
| # | Lesson | Key concepts |
|---|--------|-------------|
| 09 | [Fraud Detection](lessons/0009-fraud-detection.html) | PR curves, autoencoder anomaly detection, SMOTE, adversarial drift |
| 10 | [Anti-Money Laundering](lessons/0010-aml.html) | Graph ML, GNN message passing, NLP on SARs, selective labelling bias |

### Module 4 · Provisioning & Traded Risk
| # | Lesson | Key concepts |
|---|--------|-------------|
| 11 | [Listwise MLE & Ranking Models](lessons/0011-listwise-mle-ranking.html) | Plackett-Luce, NDCG@k, position bias, Consumer Duty |
| 12 | [IFRS9 & CECL Provisioning](lessons/0012-ifrs9-cecl-provisioning.html) | Three-stage ECL, PIT vs TTC PD, SICR, FLI multi-scenario, overlays |
| 13 | [CCR — CVA, PFE & XVA](lessons/0013-ccr-cva-pfe.html) | PFE hump profile, CVA formula, XVA desk, NN surrogate models |

### Module 5 · Balance Sheet Risk
| # | Lesson | Key concepts |
|---|--------|-------------|
| 14 | [IRRBB](lessons/0014-irrbb.html) | EVE vs NII, BCBS 368 shocks, deposit beta, prepayment burnout |
| 15 | [Liquidity Risk Models](lessons/0015-liquidity-risk.html) | LCR/NSFR, deposit flow ML, survival horizon, SVB 2023 case study |
| 16 | [Climate Risk & SEG](lessons/0016-climate-risk-seg.html) | NGFS scenarios, physical/transition risk, geospatial ML, climate ECL |
| 17 | [Economic Capital Models](lessons/0017-economic-capital.html) | ICAAP, CreditMetrics, copula aggregation, RAROC |

### Module 6 · Investment & Capital Markets
| # | Lesson | Key concepts |
|---|--------|-------------|
| 18 | [Asset Management & Investment Models](lessons/0018-asset-management.html) | Factor models, HRP, Black-Litterman with ML views, ESG/SFDR, robo-advisory |
| 19 | [Capital Markets Product Pricing](lessons/0019-capital-markets-pricing.html) | Vol surface, deep calibration, differential ML, Neural SDEs, XVA |

### Module 7 · Insurance & Pensions
| # | Lesson | Key concepts |
|---|--------|-------------|
| 20 | [Insurance Models — IFRS17](lessons/0020-insurance-ifrs17.html) | BBA/CSM, frequency×severity claims ML, Lee-Carter longevity, IBNR |
| 21 | [Pension Risk Models](lessons/0021-pension-risk.html) | DB/DC, LDI mechanics, longevity swaps, 2022 UK LDI crisis |

### Module 8 · Operational & Recovery Risk
| # | Lesson | Key concepts |
|---|--------|-------------|
| 22 | [Cyber Risk Models](lessons/0022-cyber-risk.html) | LDA, FAIR framework, DORA/CBEST, ML for intrusion detection |
| 23 | [Recovery Asset Models](lessons/0023-recovery-asset-models.html) | NPL lifecycle, workout strategy optimisation, REO AVMs, EBA guidelines |

### Module 9 · Treasury, HR & Services
| # | Lesson | Key concepts |
|---|--------|-------------|
| 24 | [Treasury & Accounting Models](lessons/0024-treasury-accounting.html) | FTP, LIBOR transition, IFRS9 hedge accounting, balance sheet optimisation |
| 25 | [HR Models](lessons/0025-hr-models.html) | Attrition ML, fair pay regression, GDPR Article 22, CRD V bonus cap |
| 26 | [Security Services Product Pricing](lessons/0026-security-services-pricing.html) | Custody pricing, securities lending optimisation, corporate action NLP |

### Module 10 · Compliance & Retail Credit Strategy
| # | Lesson | Key concepts |
|---|--------|-------------|
| 27 | [Regulatory Compliance Risk](lessons/0027-regulatory-compliance-risk.html) | Trade surveillance, sanctions screening, Consumer Duty outcome monitoring |
| 28 | [Sherwood Models](lessons/0028-sherwood-models.html) | Customer-level acquisition P&L, vintage analysis, credit limit optimisation |

---

## Who this is for

- **AI/ML engineers** moving into financial services who need domain fluency alongside technical depth
- **Quant analysts and risk managers** who want to understand how ML is applied and governed across the full bank
- **Model validators and MRM leads** looking for a structured reference across model types and regulatory frameworks

The curriculum assumes you already know the standard ML toolkit (gradient boosting, deep learning, transformers, survival analysis). It skips algorithm mechanics and goes straight to the finance-specific adaptations, failure modes, and governance requirements.

---

## Structure

```
index.html              ← Start here — full curriculum map
lessons/                ← 28 self-contained HTML lessons
assets/
  styles.css            ← Shared Tufte-inspired stylesheet
  quiz.js               ← Retrieval-practice quiz widget
```

Each lesson contains:
- **Technical content** — how the model works in its financial context
- **Worked examples** — formulas, diagrams, and numerical illustrations
- **Risk & governance section** — model risk, regulatory requirements, failure modes
- **Retrieval-practice quiz** — 3–5 questions with detailed feedback

---

## Regulatory frameworks covered

SR 11-7 · PRA SS1/23 · Basel III/IV · FRTB · BCBS 368 · IFRS9 · CECL · IFRS17 · IAS19 · Solvency II · NGFS climate scenarios · TCFD · EU SFDR · MiFID II · Consumer Duty · GDPR · DORA · FATF · EBA NPL Guidelines · CRD V · SR 15-18
