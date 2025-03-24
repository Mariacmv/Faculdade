const express = require('express'); //importando o módulo express
const calculadora = require('./util/calculadora'); //importando o módulo calculadora

const app = express(); //defini a aplicação web com o express armazenando na constante app
const port = 3000; //defino a porta onde a aplicação rodará

app.get('/somar/:a/:b', (req, res) =>{
    const {a, b} = req.params; //pega os parâmetros da url
    const resultado = calculadora.somar(parseFloat(a), parseFloat(b)); //converte os parâmetros para float e chama a função somar
    res.send(`Resultado da soma: ${resultado}`); //envia a resposta com o resultado
}); //rota 1 que define a soma

app.get('/subtrair/:a/:b', (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.subtrair(parseFloat(a), parseFloat(b)); //chama a função subtrair
    res.send(`Resultado da subtração: ${resultado}`);
}); //rota 2 que define a subtração

app.get('/multiplicar/:a/:b', (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.multiplicar(parseFloat(a), parseFloat(b)); //chama a função multiplicar
    res.send(`Resultado da multiplicação: ${resultado}`);
}); //rota 3 que define a multiplicação

app.get(`/dividir/:a/:b`, (req, res) => {
    const {a, b} = req.params;
    const resultado = calculadora.dividir(parseFloat(a), parseFloat(b)); //chama a função dividir
    res.send(`Resultado da divisão: ${resultado}`);
}); //rota 4 que define a divisão

app.listen(port, () => { //inicia o servidor express e define a porta, mantendo a aplicação ativa
    console.log(`Servidor rodando na porta ${port}`); //imprime em qual porta o servidor está rodando
});
