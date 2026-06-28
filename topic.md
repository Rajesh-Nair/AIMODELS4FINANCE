# AI / ML Applications in Bank/finance
As an AI/ML Engineer, i want to explore the following novel AI/ML application, algorithms and technique used in Banking & Finance. WHilst I understand the commonly used ML algorithm like linear/logistic, SVM, decision trees, ensembles, Deeplearning and even transformers/Gen AI, AI/ML in finance is an area I want to further expertise from the following perspective
- As a AI/ML enthusiast and technical expert who is supposed to know how these algorithm and technique work
- As a Risk lead who wants to understand the risk associated with different techniques and what origanization do to control, measure and govern them

## Credit Risk
- PD Modelling
    - XG Boost and neural networks outperform logistic regression on default prediction, capturing non-linear borrower behavior patterns

- LGD Estimation
    - Regression based ML models learn from collateral, recovery, and macro features to predict loss severity more accurately

- EAD Forecasting
    - ML models better capture drawdown behavior on revolving facilities by learning from utilisation patterns and market conditions

- Credit Scoring
    - Ensemble methods process hundreds of features - from traditional financials to alternative data (e.g. transaction patterns)

## Market Risk & Trading
- VaR & ES Estimation
    - ML captures fat tails and volatility clustering better than parametric approaches. NN and GARCG-ML hybrids improve tail risk estimation.

- FRTB and NMRF
    - ML assists in modelling non modellable risk factors where data is scarce. Imputation techniques levarage cross-asset relationships.

- Algo Trading strategies / Models
    - Features selection lets ML choose from hundreds of indicatords for signal generation

- Traded Risk
    - Encompasses Market Risk Models and Counterparty Credit Risk (CCR) models, covering CVA and PFE estimation

- CCAR / Stress Testing - BS (Balance Sheet) & PnL (Profit and Loss), IFRS9/CECL
    - NL generates more granular stress scenarios, capturing non-linear transformation of macro shocks to portfolio losses.

## Fraud & AML / Financial Crime Risk
- Fraud Detection
    - Supervised models trained on labelled fraud/non-fraud transactions identify suspicious patterns in real time.
    Autoencoders learn normal patterns and flag anomalie - detecting novel fraud types.
    Critical metric : Recall - missing fraud (false negatives) is far more costly than false positives.

- Anti-Money Laundering
    - Traditional rule based AML systems generate excessive false positives (90%+), overwhelming compliance teams.
    - ML graph based models identify suspicious networks. NLP analyses SARs and customer comms.
    - XGBoost and Random Forest reduce false positive rates while maintaining detection sensitivity.

## Other areas
- Listwise MLE (Maximum Likelihood Estimation)
    - Typically used in rankin model where a neural network is trained using a loss function that is based on listwise MLE.

## Additional model categories
 - Credit Provisioning Models in IFRS9 and CECL
 - Asset Management and Investment Models
 - Insurance Models (IFRS17)
 - Recovery Asset Models
 - Pension Risk Models
 - IRRBB Models  and BBES (Banking Book Earning Sensntivity), EVE (Economic Value of Equity) sensitivity
 - Liquidity Ris Models
 - Treasury and Accounting Models
 - Scenario Expansion and Generation (SEG) and Climate Scenario Methodologies
 - Sherwood models
 - Human Resource Models
 - Cyber Risk models
 - Climate Impact & Climate Emissions Methodologies
 - Security Services Product Pricing Models
 - Capital Markets Product Pricing
 - Regulatory Compliance Risk
 - Economic Capital Model

