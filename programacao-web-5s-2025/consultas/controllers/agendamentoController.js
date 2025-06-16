const AgendamentoConsulta = require('../models/agendamentoConsultaModel'); //importa a model

function getIndexView(req,res){
    res.render('index.html');
}

function getAgendamentosView(req,res){
    res.render('agendamentos.html');
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }else{
        res.render('index.html', {campos_invalidos, dados_consulta});
    }
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
    console.log(dados_consulta);
    let campos_invalidos = [];
    
    if (dados_consulta.nome.length == 0) form_invalido = true; campos_invalidos.push("nome");
    if (dados_consulta.sobrenome.length == 0) form_invalido = true; campos_invalidos.push("sobrenome");
    if (dados_consulta.cpf.length == 0) form_invalido = true; campos_invalidos.push("cpf");
  
    return campos_invalidos;
}

module.exports = {
    getIndexView,
    postAgendarConsulta,
    getAgendamentosView
}
