const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b == 0) {
        return 'ERRO: divisão por zero não é permitida';
    }
    return a / b;
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};

// const somar = (a, b) => a + b;
// const subtrair = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => {
//     if (b == 0){
//         return 'ERRO: divisão por zero não é permitida';
//     }
//     return a/b;
// };

// module.exports = {
//     somar, 
//     subtrair, 
//     multiplicar, 
//     dividir
// };

//CORREÇÃO:

/*
    Esse módulo implementa as operções básicas de uma calculadora.
    Essas funções devem ser exportadas
*/

export function somar(a, b){ //também pode passar no nome da função
    return a + b;
}

export function subtrair(a, b){
    return a - b;
}

export function multiplicar(a, b){
    return a * b;
}

export function dividir(a, b){
    return a / b;
}

// module.exports = {
//     somar,
//     subtrair, 
//     multiplicar,
//     dividir
// }

