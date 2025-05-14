#1:
#Escreva um aplicativo que exibe uma caixa, uma oval, uma seta e um
#losango utilizando asteriscos (*).

# print('''
#         *****      ***      *       *
#         *****    *     *   ***    *  *
#         *****    *     *  *****  *    *
#         *****      ***      *     *  *
#                                     *
# ''')


#2:
#Escreva um aplicativo que insere um número consistindo em cinco dígitos
#do usuário, separa o número em seus dígitos individuais e imprime os
#dígitos separados uns dos outros por três espaços cada. Por exemplo, se o
#usuário digitar o número 42339, o programa deve imprimir: 4 2 3 3 9.

# numero = int(input('Digite um número de 5 dígitos: '))
# i = 0
# while i<len(numero):
#     print(numero[i], end=" ")
#     i+=1

#3:
#Faça um programa que calcule a distância entre dois pontos no plano
#cartesiano . (fórmula)

# P1(x1, y1) P2(x2, y2)
# dist = ((x1-x2)**2 + (y1-y2)**2) ** (1/2)

# print('Digite os valores de P1(x1,y1) e P2(x2,y2):')
# x1 = float(input('x1 = '))
# y1 = float(input('y1 = '))
# x2 = float(input('x2 = '))
# y2 = float(input('y2 = '))

# print(f'A distância entre os pontos ', f'P1({x1:.2f}, {y1:.2f}) e P2({x2:.2f}, {y2:.2f}) é {dist}')

#4:
#Crie um programa que peça ao usuário para digitar uma frase e conte
#quantas vogais (a, e, i, o, u) aparecem na frase. Considere que a contagem
#deve ser case-insensitive (ou seja, não diferencie maiúsculas de
#minúsculas).

# frase = input('Digite uma frase: ').lower()
# print(f'Na frase \"{frase}" tem: \n',
#       f'Vogal a: {frase.count('a')}\n',
#       f'Vogal e: {frase.count('e')}\n',
#       f'Vogal i: {frase.count('i')}\n',
#       f'Vogal o: {frase.count('o')}\n',
#       f'Vogal u: {frase.count('u')}')#para colocar aspas dentro de uma string tem que colocar \

#5:
#Uma empresa que quer enviar dados pela internet pediu-lhe que
#escrevesse um programa que criptografe dados a fim de que eles possam
#ser transmitidos com maior segurança. Todos os dados são transmitidos
#como inteiros de quatro dígitos. Seu aplicativo deve ler um inteiro de quatro
#dígitos inserido pelo usuário e criptografá-lo da seguinte maneira: substitua
#cada dígito pelo resultado da adição de 7 ao dígito, obtendo o restante
#depois da divisão do novo valor por 10. Troque então o primeiro dígito pelo
#terceiro e o segundo dígito pelo quarto. Então, imprima o inteiro
#criptografado. Escreva um aplicativo separado que receba a entrada de um
#inteiro de quatro dígitos criptografado e o descriptografe (revertendo o
#esquema de criptografia) para formar o número original.


# chave = input('Digite a chave: ')

# def criptografa(chave):
#     for i in chave: #não itera sobre inteiro
#         i += 7
#         i % 10
#         i[0] = i[2]
#         i[1] = i[3]
#     print(chave)

# def descriptografa(chave):
#     for i in chave:
#         i -= 7
#         i % 10 #?
#         i[2] = i[0]
#         i[3] = i[1]
#     print(chave)

msg = input('Digite o número: ')

digi1 = (int(msg[0])+7)%10
digi2 = (int(msg[1])+7)%10
digi3 = (int(msg[2])+7)%10
digi4 = (int(msg[3])+7)%10

digi1, digi2, digi3, digi4 = digi3, digi4, digi1, digi2
print(f'Mensagem criptografada: {digi1}{digi2}{digi3}{digi4}')

msg = input('Digite a mensagem: ')

digi1 = (int(msg[0])+3)%10
digi2 = (int(msg[1])+3)%10
digi3 = (int(msg[2])+3)%10
digi4 = (int(msg[3])+3)%10

digi1, digi2, digi3, digi4 = digi3, digi4, digi1, digi2
print(f'Mensagem descriptografada: {digi1}{digi2}{digi3}{digi4}')
