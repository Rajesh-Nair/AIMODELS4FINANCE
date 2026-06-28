# Teaching Notes

## User profile
- AI/ML Engineer: fluent in the full ML algorithm toolkit (LR, SVM, ensembles, DL, transformers)
- Dual learning goal: technical depth + risk/governance lens
- Every lesson must serve both perspectives

## Teaching preferences (to update as sessions progress)
- Topic file (topic.md) is the curriculum; use it as a guide to sequence lessons
- Do not re-explain algorithm mechanics — skip to finance-specific adaptation
- Always pair technical content with a risk/governance section

## Full sequence plan

### Original curriculum (complete)
1. ✅ Credit Risk: PD Modelling (XGBoost vs scorecard, SHAP, SR 11-7 intro)
2. ✅ Credit Risk: LGD Estimation (bimodal output, downturn LGD)
3. ✅ Credit Risk: EAD Forecasting (revolving facilities, drawdown behaviour)
4. ✅ Credit Risk: Credit Scoring (alternative data, proxy variable risk)
5. ✅ Market Risk: VaR & ES (GARCH-ML hybrids, fat tails, FRTB context)
6. ✅ Market Risk: FRTB & NMRF (ML imputation for scarce data)
7. ✅ Market Risk: Algo Trading signal generation (IC/ICIR, walk-forward, kill switches)
8. ✅ Market Risk: CCAR / Stress Testing (satellite models, overlays, SR 15-18)
9. ✅ Fraud: Detection (supervised + autoencoders, recall vs precision)
10. ✅ AML: Graph ML, NLP on SARs, false positive reduction
11. ✅ Special topic: Listwise MLE in ranking models

### Extended curriculum (from topic.md additions)
12. ✅ Credit Provisioning: IFRS9 & CECL (three-stage, PIT PD, FLI, SICR, overlays)
13. ✅ Traded Risk: CCR — CVA, PFE, XVA, surrogate ML models, FRTB-CVA
14. ✅ IRRBB: EVE, NII/BBES, NMD deposit beta, prepayment burnout, BCBS 368
15. ✅ Liquidity Risk Models (LCR, NSFR, deposit flow ML, SVB case study)
16. ✅ Climate Risk & SEG (NGFS scenarios, physical/transition risk, climate ECL)
17. ✅ Economic Capital Models (ICAAP, EC allocation, tail-risk aggregation)
18. ✅ Asset Management & Investment Models (portfolio optimisation, factor models, ML alpha, ESG, robo-advisory)
19. ✅ Capital Markets Product Pricing (local/stochastic vol, deep calibration, differential ML, XVA)
20. ✅ Insurance Models — IFRS17 (BBA, CSM, claims ML, longevity, IBNR reserving, cat models)
21. ✅ Pension Risk Models (DB vs DC, LDI, longevity swap, 2022 UK LDI crisis)
22. ✅ Cyber Risk Models (LDA, FAIR, DORA/CBEST, ML for intrusion detection and quantification)
23. ✅ Recovery Asset Models (NPL portfolios, workout strategy ML, REO, EBA NPL guidelines)
24. ✅ Treasury & Accounting Models (FTP, IFRS9 hedge accounting, balance sheet optimisation)
25. ✅ HR Models (attrition ML, compensation modelling, GDPR Article 22, CRD V bonus cap)
26. ✅ Security Services Product Pricing (custody, fund admin, securities lending optimisation)
27. ✅ Regulatory Compliance Risk (trade surveillance, sanctions screening, Consumer Duty)
28. ✅ Sherwood Models (customer-level acquisition P&L, vintage analysis, credit limit optimisation)

## Sherwood model clarification (resolved)
User definition: "a specialized credit risk and profitability framework used by retail banks
and credit card lenders to analyze customer-level acquisition decisions, evaluate lifetime
portfolio value, and optimize P&L impact for loans." Lesson 28 covers the full methodology:
P&L decomposition, vintage analysis, sub-model ensemble, acquisition optimisation, and
in-life portfolio management. Regulatory dimensions (disparate impact, Consumer Duty,
IFRS9 alignment, SR 11-7) included.
