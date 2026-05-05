#Solução do problema das N-Rainhas em Python
#Adaptado do código em C++ -> referencia.txt

sol = 0  # contador de soluções

def mostrar_tabuleiro(tab, N):
    """
        função que imprime a matriz (percorre as linhas e colunas definidas por N que está iterável com range) - o tabuleiro a depender do valor da célula
        se o valor for 1 preenche com a rainha "R", caso não preenche com "-"
        pula linha para formar uma tabela
    """
    for i in range(N):
        for j in range(N):
            if tab[i][j] == 1:
                print("R", end="\t")
            else:
                print("-", end="\t")
        print("\n")
    print("\n")

def seguro(tab, N, lin, col):
    """
        função que verifica os arredores da rainha 
    """
    #verifica se existe 1 nas linhas em que i pertence
    for i in range(N):
        if tab[lin][i] == 1:
            return False

    #verifica se existe 1 nas colunas em que i pertence
    for i in range(N):
        if tab[i][col] == 1:
            return False

    #verifica na diagonal, vai andando pra cima e pra esquerda até sair do tabuleiro
    i, j = lin, col
    while i >= 0 and j >= 0:
        if tab[i][j] == 1:
            return False
        i -= 1; j -= 1
    #volta para a posição em que estava e verifica na diagonal sentido para baixo e direita
    i, j = lin, col
    while i < N and j < N:
        if tab[i][j] == 1:
            return False
        i += 1; j += 1

    #verifica a outra diagonal na outra direção, andando pra cima e direita
    i, j = lin, col
    while i >= 0 and j < N:
        if tab[i][j] == 1:
            return False
        i -= 1; j += 1
    #volta para a posição em que estava e verifica na diagonal sentido para baixo e esquerda
    i, j = lin, col
    while i < N and j >= 0:
        if tab[i][j] == 1:
            return False
        i += 1; j -= 1

    return True #retorna True caso nenhuma rainha for encontrada na posição (lin, col)

def executar(tab, N, col):
    """
        função que executa a verificação do backtracking
    """
    
    global sol #refere-se a variável sol, então define-se como global
    if col == N: #se todas as colunas foram preenchidas de acordo com o número de rainhas, então imprime a solução encontrada
        print(f"Solução {sol + 1}:\n")
        mostrar_tabuleiro(tab, N)
        sol += 1
        return

    for i in range(N):                     #para cada linha de tal coluna
        if seguro(tab, N, i, col):         #verifica se é possível inserir uma rainha naquela linha
            tab[i][col] = 1                #insere a rainha
            executar(tab, N, col + 1)      #chama a própria função para verificar a próxima coluna
            tab[i][col] = 0                #remove a rainha para tentar outras possibilidades

#função principal
def main():
    N = 5  # número de rainhas que também define as medidas do tabuleiro, no caso 5x5
    tab = [] #defino um tabuleiro vazio
    for i in range(N): #para cada linha 
        linha = []
        for j in range(N):
            linha.append(0) #adiciona 0 em cada linha
        tab.append(linha) #adiciona a linha à matriz
    executar(tab, N, 0) #faz o backtracking
    print(f"\nSoluções encontradas: {sol}")

if __name__ == "__main__":
    main()
