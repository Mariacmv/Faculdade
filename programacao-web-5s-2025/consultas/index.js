const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const db = require('./db'); //recebe o conector do banco
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 
app.use(express.urlencoded({extended: true})); //decodificação

const agendamentoRouter = require('./routers/agendamentoRouter'); //importo o arquivo de rotas
app.use('/', agendamentoRouter); //qualquer requisição passa pelo agendamentoRouter

app.listen(PORT, ()=>{
    console.log(`App rodando na porta `+ PORT);
});

