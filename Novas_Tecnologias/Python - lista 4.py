#1:
def formatar_data(*, dia, mes, ano):
    return f"{dia:02d}/{mes:02d}/{ano}"

print(formatar_data(dia=5, mes=7, ano=2025))
print(formatar_data(ano=2023, dia=1, mes=12))
#2:
import math

def soma(a, b): return a + b
def subtracao(a, b): return a - b
def multiplicacao(a, b): return a * b
def divisao(a, b): return a / b
def resto(a, b): return a % b
def potencia(a, b): return a ** b
def raiz(a): return math.sqrt(a)
def fatorial(a): return math.factorial(a)
def logaritmo(a): return math.log(a)
def cosseno(a): return math.cos(a)
def seno(a): return math.sin(a)
def tangente(a): return math.tan(a)

def aplicar_operacao(a=None, b=None, operacao=None):
    if b is not None:
        return operacao(a, b)
    return operacao(a)

print(aplicar_operacao(2, 3, soma))
print(aplicar_operacao(4, operacao=fatorial))
#3:
def resto(a, b):
    if a < b:
        return a
    return resto(a - b, b)

def quociente(a, b):
    if a < b:
        return 0
    return 1 + quociente(a - b, b)

def produto(a, b):
    if b == 0:
        return 0
    return a + produto(a, b - 1)
def suc(n): return n + 1
def pred(n): return n - 1

def soma(a, b):
    if b == 0:
        return a
    return soma(suc(a), pred(b))
#4:
from functools import lru_cache

@lru_cache(None)
def T(n):
    if n == 0: return 0
    if n == 1: return 1
    return T(n-1) + 2*T(n-2)

T_memo = lambda n: T(n)

print(T_memo(10))
#5:
import re

def limpar(texto):
    return re.sub(r'[^\w\s]', '', texto).lower()

def tokenizar(texto):
    return limpar(texto).split()
  
from collections import Counter

def frequencia(palavras):
    return Counter(palavras)

def mais_comuns(palavras, n=5):
    return frequencia(palavras).most_common(n)
from texttools import preprocessing, statistics

texto = "Amor, Roma, mora, carro, orça, orca, arco! Amor, Roma!"
tokens = preprocessing.tokenizar(texto)
print(statistics.mais_comuns(tokens, 5))
#6:
import csv

def ler_csv(caminho):
    with open(caminho, newline='') as f:
        return [dict(row) for row in csv.DictReader(f)]

def total_vendas(produtos):
    return {p['produto']: sum(float(v['valor']) for v in produtos if v['produto'] == p['produto']) for p in produtos}
#7:
import csv

def ler_csv(caminho):
    with open(caminho, newline='') as f:
        reader = csv.DictReader(f)
        dados = []
        for linha in reader:
            dados.append({k: float(v) if v.replace('.','',1).isdigit() else v for k, v in linha.items()})
        return dados
def estatisticas(dados, campo):
    valores = [dado[campo] for dado in dados if isinstance(dado[campo], (int, float))]
    return {
        'media': sum(valores) / len(valores),
        'minimo': min(valores),
        'maximo': max(valores),
        'total': sum(valores)
    }
#8:
def mostrar_info(obj):
    """Exibe informações detalhadas sobre um objeto."""
    print(f"Nome: {getattr(obj, '__name__', 'Não disponível')}")
    print(f"ID: {id(obj)}")
    print(f"Tipo: {type(obj)}")
    print(f"Docstring: {getattr(obj, '__doc__', 'Sem docstring')}")
    print("Atributos e métodos:", dir(obj))
#9:
operadores = {
    '+': lambda a,b: a+b,
    '-': lambda a,b: a-b,
    '*': lambda a,b: a*b,
    '/': lambda a,b: a/b
}

def avaliar(expr):
    expr = expr.replace(' ', '')
    if expr.isdigit():
        return int(expr)
    if '(' in expr:
        p1 = expr.find('(')
        count = 1
        for i in range(p1+1, len(expr)):
            if expr[i] == '(': count += 1
            if expr[i] == ')': count -= 1
            if count == 0:
                dentro = avaliar(expr[p1+1:i])
                nova = str(dentro)
                return avaliar(expr[:p1] + nova + expr[i+1:])
    for op in ('+', '-', '*', '/'):
        if op in expr:
            left, right = expr.split(op, 1)
            return operadores[op](avaliar(left), avaliar(right))

print(avaliar("2*(3+5)"))
#10:
import random

def lancar_dado():
    return random.randint(1,6)
eventos = {}

def registrar_evento(nome, callback):
    eventos.setdefault(nome, []).append(callback)

def disparar_evento(nome):
    for callback in eventos.get(nome, []):
        callback()

def evento(nome):
    def decorator(func):
        registrar_evento(nome, func)
        return func
    return decorator
  
from jogo.dados import lancar_dado
from jogo.eventos import evento, disparar_evento

@evento('sorte')
def ganhou():
    print("Você tirou 6!")

@evento('azar')
def perdeu():
    print("Tirou 1.")

resultado = lancar_dado()
print(f"Resultado do dado: {resultado}")

if resultado == 6:
    disparar_evento('sorte')
elif resultado == 1:
    disparar_evento('azar')
