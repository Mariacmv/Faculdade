function getIndexView(req,res){
    res.render('consulta.html');
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);
    res.render('index.html', (campos_invalidos, dados_consulta));
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
    console.log(req.body);
    let campos_invalidos = [];
    
    if (dados_consulta.nome.length == 0) form_invalido = true; campos_invalidos.push("nome");
    if (dados_consulta.sobrenome.length == 0) form_invalido = true; campos_invalidos.push("sobrenome");
    if (dados_consulta.cpf.length == 0) form_invalido = true; campos_invalidos.push("cpf");
  
    return campos_invalidos;
}

module.export = {
    getIndexView,
    postAgendarConsulta
}