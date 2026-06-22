# Readme.md
## Detecção Inteligente de Spam Utilizando Machine Learning e Lógica Fuzzy

## Integrantes
- Maria Clara Guerreira Moita Viana
- Maria Fernanda Lopes Rodrigues de Sousa
- João Gabriel Leite Neirelli
- João Victor Martins Albernaz


## Objetivo

Desenvolver um sistema capaz de identificar mensagens SMS classificando-as como Spam ou Não Spam através de Machine Learning e complementar essa análise utilizando Lógica Fuzzy para determinar o grau de suspeita da mensagem.

## Tecnologias Utilizadas

- Python
- Google Colab
- Pandas
- NumPy
- Scikit-Learn
- Scikit-Fuzzy
- Matplotlib

## Fluxo da Solução

Mensagem SMS

⬇️

Pré-processamento (TF-IDF)

⬇️

Árvore de Decisão

⬇️

Probabilidade de Spam

⬇️

Sistema Fuzzy

⬇️

Grau de Suspeita

## Base de Dados

SMS Spam Collection Dataset

- Total de mensagens: 5572
- Classes:
  - Spam
    - Ham (Não Spam)

    ## Metodologia

    ### Machine Learning
    - Vetorização de texto com TF-IDF
    - Treinamento usando Árvore de Decisão
    - Avaliação por matriz de confusão e métricas de classificação

  ### Sistema Fuzzy
    Entradas:
    - Probabilidade de Spam
    - Quantidade de Links

    Saída:
    - Grau de Suspeita

  ## Resultado Esperado

    O sistema deve identificar mensagens suspeitas e fornecer uma avaliação mais interpretável através da integração entre Machine Learning e Lógica Fuzzy.
