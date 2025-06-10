//instalar:  npm install express-session@1.17.2
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const db = require('./db'); //recebe o conector do banco
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 
app.use(express.urlencoded({extended: true})); //decodificação

app.use(session({
    secret: 'secret-token',
    name: 'sessionID',
    resave: false,
    saveUninitialized: false
}))

const agendamentoRouter = require('./routers/agendamentoRouter'); //importo o arquivo de rotas
const usuarioRouter = require('./routers/usuarioRouter');
app.use('/', agendamentoRouter); //qualquer requisição passa pelo agendamentoRouter
app.use('/', usuarioRouter);

db.sync();

app.listen(PORT, ()=>{
    console.log(`App rodando na porta `+ PORT);
});

