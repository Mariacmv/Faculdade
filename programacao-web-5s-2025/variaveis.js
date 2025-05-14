const n = 3;

//var n = 2; errado porque já foi declarado
var j = 2;

//console.log('j='+j);

let i = 4; //o let não permite criar variáveis iguais

//console.log('i='+i);

let nome = "Maria";
var cpf = '123'; //caso não especifique o tipo de dado (o que não é obrigatório fazer) a linguagem assume que é var
telefone = '123';
minhaString = 'Texto "String"'; //aspas simples ou duplas e a que estiver dentro das aspas principais será printada também

let tString = "Meu nome é "+nome+". Meu cpf é "+cpf+". Telefone: "+telefone;//`` serve para declarar variáveis
//Como o anterior pode dar problema, então utiliza-se template string, a crase ``
let String = `Meu nome é ${nome}. Meu cpf é ${cpf}. Telefone: ${telefone}.`;

console.log(minhaString);

let x = 5.0;
x = .5;//pode colocar só .5, sem o 0
x = 3;

// console.log(typeof x);//typeof diz o tipo de variável
// console.log(typeof tString);

//declaração de variável booleana
let verdadeiro = true; //só declara com letra minúscula
let falso = false;

//Null e Undefined
let conexao = null; //quando recebe vazio 
let conexao2; //não foi definido

//Operações aritméticas
let y = x * x;
console.log('y='+y);
let z = x + x;
console.log('z='+z);
let f = x - x;
console.log('f='+f);
let g = x / x;
console.log('g='+g);