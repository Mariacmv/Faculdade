const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const PORT = 8080;
app.engine('html', mustacheExpress());
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.render('consulta.html');
});

app.post('/agendar_consulta', (req, res) => {
    console.log(req.body);
    let campos_invalidos = [];
  
    const {
      nome, sobrenome, cpf, data_nascimento, telefone, cep, endereco,
      clinica, especialidade, data_consulta, hora_consulta
    } = req.body;
  
    if (!nome) campos_invalidos.push("nome");
    if (!sobrenome) campos_invalidos.push("sobrenome");
    if (!cpf) campos_invalidos.push("cpf");
    if (!data_nascimento) campos_invalidos.push("data_nascimento");
    if (!telefone) campos_invalidos.push("telefone");
    if (!cep) campos_invalidos.push("cep");
    if (!endereco) campos_invalidos.push("endereco");
    if (!data_consulta) campos_invalidos.push("data_consulta");
    if (!hora_consulta) campos_invalidos.push("hora_consulta");
  
    const hoje = new Date();
    const dataConsulta = new Date(`${data_consulta}T${hora_consulta}`);
  
    if (dataConsulta <= hoje) {
      campos_invalidos.push("Data e hora da Consulta (deve ser futura)");
    }
  
    const form_invalido = campos_invalidos.length > 0;
  
    if (form_invalido) {
      return res.render('consulta.html', {
        form_invalido,
        campos_invalidos,
        ...req.body
      });
    }
  
    return res.render('consulta.html', {
      form_valido: true,
      nome, sobrenome, cpf, data_nascimento, telefone, cep, endereco,
      clinica, especialidade, data_consulta, hora_consulta
    });
  });

app.listen(PORT, ()=>{
    console.log(`App rodando na porta `+ PORT);
});

