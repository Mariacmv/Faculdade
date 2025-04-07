// const express = require('express'); //importando o módulo express - framework
// const calculadora = require('./util/calculadora'); //importando o módulo calculadora

// const app = express(); //defini a aplicação web com o express armazenando na constante app
// const port = 3000; //defino a porta onde a aplicação rodará

// app.get('/somar/:a/:b', (req, res) =>{
//     const {a, b} = req.params; //pega os parâmetros da url
//     const resultado = calculadora.somar(parseFloat(a), parseFloat(b)); //converte os parâmetros para float e chama a função somar
//     res.send(`Resultado da soma: ${resultado}`); //envia a resposta com o resultado
// }); //rota 1 que define a soma

// app.get('/subtrair/:a/:b', (req, res) => {
//     const {a, b} = req.params;
//     const resultado = calculadora.subtrair(parseFloat(a), parseFloat(b)); //chama a função subtrair
//     res.send(`Resultado da subtração: ${resultado}`);
// }); //rota 2 que define a subtração

// app.get('/multiplicar/:a/:b', (req, res) => {
//     const {a, b} = req.params;
//     const resultado = calculadora.multiplicar(parseFloat(a), parseFloat(b)); //chama a função multiplicar
//     res.send(`Resultado da multiplicação: ${resultado}`);
// }); //rota 3 que define a multiplicação

// app.get(`/dividir/:a/:b`, (req, res) => {
//     const {a, b} = req.params;
//     const resultado = calculadora.dividir(parseFloat(a), parseFloat(b)); //chama a função dividir
//     res.send(`Resultado da divisão: ${resultado}`);
// }); //rota 4 que define a divisão

// app.listen(port, () => { //inicia o servidor express e define a porta, mantendo a aplicação ativa
//     console.log(`Servidor rodando na porta ${port}`); //imprime em qual porta o servidor está rodando
// });


//Correção: Criando um app que fica em execução
const calc = require('./util/calculadora');
const express = require('express'); //módulo externo só fala o nome do pacote

const app = express(); //retorna um servidor web

app.get('/', (req, res)=>{
    let html = '<h1>app-calculadora</h1>'; //adicionando html 
    html += '<h3>Rotas disponíveis:</h3>';
    html += '<p>/somar/:a/:b <a href="/somar/1/2">testar</a></p>';
    html += '<p>/subtrair/:a/:b <a href="/subtrair/1/2">testar</a></p>';
    html += '<p>/multiplicar/:a/:b <a href="/multiplicar/1/2">testar</a></p>';
    html += '<p>/dividir/:a/:b <a href="/dividir/1/2">testar</a></p>';
    res.send(html); //passa para executar
}); //quando o usuário realizar uma requisição o app vai obter a requisição e devolver uma resposta

//definindo as rotas
app.get('/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a); //variável que recebe o valor do parâmetro a
    let b = Number(req.params.b); //Number para garantir que um número seja digitado
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);//resposta
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = Number(req.params.a); //variável que recebe o valor do parâmetro a
    let b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);//resposta
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = Number(req.params.a); //variável que recebe o valor do parâmetro a
    let b = Number(req.params.b);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);//resposta
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = Number(req.params.a); //variável que recebe o valor do parâmetro a
    let b = Number(req.params.b);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);//resposta
});

const PORT = 8080;//declarando a porta 8080, mas pode ser qualquer valor
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' +PORT); //também pode: `app rodando na porta ${PORT}`
}); //o app "escuta" a porta 8080, se der ceerto, passo uma função para ser chamada

//Definir as rotas utilizando requisições do tipo GET
