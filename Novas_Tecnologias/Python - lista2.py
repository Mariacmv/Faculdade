#1:
def soma_pares():
    n = int(input("Digite um número inteiro: "))
    soma = sum(num for num in range(2, n + 1, 2))
    print(f"Soma dos pares de 1 até {n}: {soma}")

soma_pares()
#2:
def quadrado_vazio():
    lado = int(input("Digite o tamanho do lado do quadrado (1 a 20): "))
    if 1 <= lado <= 20:
        print('*' * lado)
        for _ in range(lado - 2):
            print('*' + ' ' * (lado - 2) + '*')
        if lado > 1:
            print('*' * lado)
    else:
        print("Tamanho inválido.")

quadrado_vazio()
#3:
import random

def adivinhacao():
    numero = random.randint(1, 100)
    tentativa = None
    while tentativa != numero:
        tentativa = int(input("Adivinhe o número (entre 1 e 100): "))
        if tentativa < numero:
            print("Muito baixo.")
        elif tentativa > numero:
            print("Muito alto.")
    print("Parabéns! Você acertou!")

adivinhacao()

#4:
import string

def verificar_palindromo():
    frase = input("Digite uma frase: ")
    limpa = ''.join(c.lower() for c in frase if c.isalnum())
    if limpa == limpa[::-1]:
        print("É um palíndromo.")
    else:
        print("Não é um palíndromo.")

verificar_palindromo()
#5:
def verificar_anagramas():
    palavra1 = input("Digite a primeira palavra/frase: ")
    palavra2 = input("Digite a segunda palavra/frase: ")

    def normalizar(s):
        return sorted(c.lower() for c in s if c.isalnum())

    if normalizar(palavra1) == normalizar(palavra2):
        print("São anagramas!")
    else:
        print("Não são anagramas.")

verificar_anagramas()
#6:
def collatz():
    n = int(input("Digite um número inteiro positivo: "))
    passos = 0
    while n != 1:
        print(n, end=" → ")
        n = n // 2 if n % 2 == 0 else n * 3 + 1
        passos += 1
    print(1)
    print(f"Número de passos: {passos}")

collatz()
#7:
def crivo_eratostenes():
    n = int(input("Gerar primos até: "))
    primos = [True] * (n+1)
    primos[0:2] = [False, False]
    for i in range(2, int(n**0.5) + 1):
        if primos[i]:
            for j in range(i*i, n+1, i):
                primos[j] = False
    print("Primos:", [i for i, primo in enumerate(primos) if primo])

crivo_eratostenes()
#8:
def fibonacci():
    n = int(input("Digite a posição n (n ≥ 3): "))
    a, b = 1, 1
    for _ in range(n - 2):
        a, b = b, a + b
    print(f"O {n}º termo da sequência de Fibonacci é {b}")

fibonacci()
#9:
def numeros_armstrong():
    inicio = int(input("Digite o início do intervalo: "))
    fim = int(input("Digite o fim do intervalo: "))

    for num in range(inicio, fim + 1):
        str_num = str(num)
        ordem = len(str_num)
        soma = sum(int(d)**ordem for d in str_num)
        if soma == num:
            print(num)

numeros_armstrong()
#10:
def busca_linear():
    palavras = input("Digite as palavras separadas por espaço: ").split()
    termo = input("Digite o termo a ser buscado: ")
    
    for indice, palavra in enumerate(palavras):
        if palavra == termo:
            print(f"'{termo}' encontrado no índice {indice}.")
            break
    else:
        print(f"'{termo}' não foi encontrado na lista.")

busca_linear()
