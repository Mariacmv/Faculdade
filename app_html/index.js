const express = require('express'); //carrega o módulo express
const mustacheExpress = require('mustache-express');
const app = express(); //retorno o express e guardo na variável app

app.engine('html', mustacheExpress()); //chamo o mustache, construindo o renderizador
app.set('view engine', 'html');
app.set('views', __dirname + '/views'); //caminho onde as telas estão guardadas

const PORT = 8080; //defino uma porta onde meu app vai rodar
app.listen(PORT, ()=>{
    console.log('app rodando na porta '+PORT);
}); //o app vai escutar as requisições desta porta

app.get('/ola/:nome', (req, res)=>{
    let nome = req.params.nome //recupero o que o usuário digitar
    res.render('index.html', {nome}); //devolvo o que ele digitar
});//crio uma rota