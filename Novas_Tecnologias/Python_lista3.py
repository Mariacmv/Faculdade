#1: (V)
# Dada uma lista de palavras, construa um dicionário que mapeia cada
# palavra para o número de caracteres que ela possui.
# lista = ['uva', 'morango', 'maçã']
# dic = {
#     palavra : len(palavra) for palavra in lista
# }
# print(dic)

#2: (V)
# Dada uma lista de palavras, agrupe-as em um dicionário onde a chave seja
# uma forma canônica (por exemplo, os caracteres ordenados) e o valor seja
# a lista de palavras que são anagramas entre si. Essa técnica pode ser
# utilizada para identificar grupos de palavras com os mesmos caracteres,
# independentemente da ordem.
# Entrada:
# ["amor", "roma", "mora", "carro", "orça", "orca", "arco"]
# Saída:
# ('a', 'm', 'o', 'r'): ['amor', 'roma', 'mora']
# ('c', 'o', 'r', 'r'): ['carro']
# ('a', 'c', 'o', 'r'): ['orça', 'orca', 'arco']
# lista = ['amor', 'roma', 'mora', 'carro', 'orca', 'arco']
# anagramas = {}
# for palavra in lista: 
#     chave = tuple(sorted(palavra))
#     if chave in anagramas:
#         anagramas[chave].append(palavra)
#     else:
#         anagramas[chave] = [palavra]
# for chave, valor in anagramas.items():
#     print(f'{chave}:{valor}')

#3:
# Dada uma lista de intervalos representados por tuplas (início, fim), escreva
# um programa que mescle os intervalos que se sobrepõem. Por exemplo,
# dado os intervalos 1, 4, 2, 5, 7, 9 , a saída deve ser 1, 5, 7, 9 
intervalos = [(1, 4), (2, 5), (7, 9)]
intervalos.sort()

mesclados = [intervalos[0]]

for inicio, fim in intervalos[1:]:
    ultimo_inicio, ultimo_fim = mesclados[-1]
    if inicio <= ultimo_fim:
        mesclados[-1] = (ultimo_inicio, max(ultimo_fim, fim))
    else:
        mesclados.append((inicio, fim))

print(mesclados)
#4:
# Dada uma lista de números, conte a frequência de cada número e, em
# seguida, filtre e exiba somente os números que aparecem um número
# mínimo de vezes (por exemplo, pelo menos 3 vezes).
from collections import Counter

numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
frequencias = Counter(numeros)

resultado = [num for num, freq in frequencias.items() if freq >= 3]
print(resultado)
#5:
# Represente polinômios como dicionários, onde as chaves são os expoentes
# e os valores são os coeficientes. Por exemplo, o polinômio é
# representado por 2 3, 1 2, 0 1. Crie uma função que multiplique dois 
# polinômios e retorne o polinômio resultante, também como dicionário.
def multiplica_polinomios(p1, p2):
    resultado = {}
    for exp1, coef1 in p1.items():
        for exp2, coef2 in p2.items():
            exp = exp1 + exp2
            coef = coef1 * coef2
            resultado[exp] = resultado.get(exp, 0) + coef
    return resultado

p1 = {2: 3, 1: 2, 0: 1}
p2 = {1: 1, 0: 4}
print(multiplica_polinomios(p1, p2))
#6:
# Dada uma lista de números inteiros e um valor alvo, determine se existe um
# subconjunto cuja soma seja exatamente igual ao valor alvo.
from itertools import chain, combinations

def existe_subconjunto(lista, alvo):
    for subconjunto in chain.from_iterable(combinations(lista, r) for r in range(len(lista)+1)):
        if sum(subconjunto) == alvo:
            return True
    return False

numeros = [3, 34, 4, 12, 5, 2]
alvo = 9
print(existe_subconjunto(numeros, alvo))
#7:
# Faça um jogo da Forca utilizando listas. Dada uma palavra, dê algumas
# chances para o usuário acertar.
import random

palavra = random.choice(["python", "programa", "forca"])
oculta = ["_"] * len(palavra)
tentativas = 6

while tentativas > 0 and "_" in oculta:
    print(f"Tentativas restantes: {tentativas}")
    print(" ".join(oculta))
    chute = input("Digite uma letra: ").lower()
    if chute in palavra:
        for i, letra in enumerate(palavra):
            if letra == chute:
                oculta[i] = chute
    else:
        tentativas -= 1

print("Você ganhou!" if "_" not in oculta else "Game over!")
#8:
# Faça um programa que leia uma expressão com parênteses. Usando pilhas,
# verifique se os parênteses foram abertos e fechados na ordem correta.
# Exemplo:
# (()) OK ()()(()()) OK ( ) ) Erro
# Você pode adicionar elementos à pilha sempre que encontrar abre
# parênteses e desempilhá-la a cada fecha parênteses. Ao desempilhar,
# verifique se o topo da pilha é um abre parênteses. Se a expressão estiver
# correta, sua pilha estará vazia no final.

expressao = input('Digite a sequência de parênteses: ')
pilha = []
erro = False
for char in expressao:
    if char == '(':
        pilha.append(')')
    else:
        if len(pilha) == 0:
            erro = True
            break
    pilha.pop()
if erro or len(pilha) != 0:
    print('Erro!')
else:
    print('Correta!')

#9:
# Escreva um programa que compare duas listas. Utilizando operações com
# conjuntos, imprima:
# os valores comuns às duas listas
# os valores que só existem na primeira
# os valores que existem apenas na segunda
# uma lista com os elementos não repetidos das duas listas.
# a primeira lista sem os elementos repetidos na segunda
lista1 = [1, 2, 3, 4]
lista2 = [3, 4, 5, 6]

conj1 = set(lista1)
conj2 = set(lista2)

print("Comuns:", conj1 & conj2)
print("Só na primeira:", conj1 - conj2)
print("Só na segunda:", conj2 - conj1)
print("Todos sem repetir:", conj1 ^ conj2)
print("Primeira sem elementos da segunda:", conj1 - conj1 & conj2)
#10:
# Crie um programa que solicite ao usuário os dados de uma pessoa e
# armazene essas informações em um dicionário. O dicionário deverá conter
# as seguintes chaves e seus respectivos valores:
# first_name Primeiro nome
# last_name Sobrenome
# age Idade
# city Cidade onde a pessoa vive
# O programa deve apresentar todas as informações armazenadas no
# dicionário.
# Com uso de listas, armazene dados de várias pessoas. Exiba todas as
# informações armazenadas.
pessoas = []

while True:
    pessoa = {
        "first_name": input("Primeiro nome: "),
        "last_name": input("Sobrenome: "),
        "age": int(input("Idade: ")),
        "city": input("Cidade: ")
    }
    pessoas.append(pessoa)
    if input("Adicionar outra pessoa? (s/n): ").lower() != 's':
        break

for p in pessoas:
    print(p)
