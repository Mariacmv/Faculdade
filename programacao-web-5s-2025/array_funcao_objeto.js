//Declaração de funções
//function nomeFunção(parâmetros){corpo_da_função}

// let num_A = 3.0;
// let num_B = 2;
// let num_C;

// function imprimirResultado(operando1, operando2, operacao, resultado){
//     console.log(`A ${operacao} entre ${operando1} e ${operando2} é igual a ${resultado}`);
// }

// //Arrays -> coleção de tipos primitivos, podem ser de tipos diferentes. 
// //Declarando um array:
// //let nome_array = []; Array vazio
// const operacoes = ['adição', 'subtração', 'multiplicação', 'divisão'];
// //Não é possível mudar uma constante do array, mas sim um índice, um elemento
// num_C = num_A + num_B;
// imprimirResultado(num_A, num_B, operacoes[0], num_C);
// num_C = num_A - num_B;
// imprimirResultado(num_A, num_B, operacoes[1], num_C);
// num_C = num_A * num_B;
// imprimirResultado(num_A, num_B, operacoes[2], num_C);
// num_C = num_A / num_B;
// imprimirResultado(num_A, num_B, operacoes[3], num_C);

// //Matriz -> Conjunto de arrays
// /*
//     1 2 3
//     4 5 6
//     7 8 9
// */
// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(matriz);

// //For:
// //Valor inicial, valor final, incrementa (++) ou decrementa (--)

// function imprimirMatriz(A){ //A = linhas
//     for (let i = 0; i < A.length; i++){ //percorre cada linha
//         let linha = ""; //crio esta variável para definir a impressão6
//         for (let j = 0; j < A[i].length; j++){ //percorre cada coluna de tal linha
//             //A[i][j] //acesso o elemento de tal linha e de tal coluna
//             console.log(A[i][j] + "\t"); //console.log já pula linhas
//         } //A[i] acesso cada linha
//         console.log(linha);
//     }
// }

//imprimirMatriz(matriz);


//Objetos: é declarado através de chaves. Igual ao dicionário python
let capitais = { //objeto
    DF: "Brasília", //chave (atributo - declaração semelhante a de variáveis) + valor (pode ser de qualquer tipo e podem estar juntos)
    DD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

for (chave in capitais){
    console.log(chave + "="+ capitais[chave]);
}

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    } //então retorno verdadeiro
    return false;
}

let n = 2;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);
n = 3;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);
n = 7;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);
n = 10;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`);