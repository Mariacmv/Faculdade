const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const PORT = 8080;

//para renderizar o html
app.engine('html', mustacheExpress());
app.set('view engine', 'html'); //propriedade do express
app.set('views', __dirname + '/views'); //passo o caminhoc das telas da aplicação
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.render('consulta.html');
});

app.post('/agendar_consulta', (req, res)=>{
    let form_invalido = false;

    if (req.body.length == 0){ //se não for preenchido
        form_invalido = true;
    }
    //console.log(req.body);//conferir se os dados estão chegando
    res.render('consulta.html', {form_invalido});//passo a variável para o html para que só apareça a mensagem de não preenchido se não estiver preenchido
});

app.listen(PORT, ()=>{
    console.log(`App rodando na porta `+ PORT);
});

