//instalar:  npm install express-session@1.17.2
const Usuario = require('../models/usuarioModel');

function getCadastroView(req, res){
    res.render('cadastro_usuario.html');
}

function getLoginView(req, res){
    res.render('login.html');
}

function postCadastrarUsuario(req, res){
    const dados_usuario = req.body; //pega as informações do formulário
    //tem que validar as informações
    Usuario.create(dados_usuario).then(()=>{
        res.redirect('/acessar'); //fez o cadastro, é redirecionado à tela de login
    });
}

function postAutenticarUsuario(req, res){
    const usuario = Usuario.findOne({ //usando a model para buscar no banco de dados - é um select
        where: {
            email: req.body.email, 
            senha: req.body.senha
        }
    });

    if (usuario != null){
        console.log('USUÁRIO AUTENTICADO');
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/agendamentos');
    }else{
        res.redirect('/acessar?erro_login=1') //'?' passa uma informação
    }
}

function sair(req, res){
    req.session.detroy();
    res.redirect('/acessar');
}

function verificarAutenticacao(req, res, next){ //next para continuar a autenticação caso não haja erros
    if(req.session.autorizado){
        console.log('Usuário autorizado');
        next();
    }else{
        console.log("Usuário não autorizado");
        res.redirect('/acessar');
    }
} //função de autenticação do usuário

module.exports = {
    getCadastroView,
    getLoginView,
    postCadastrarUsuario,
    postAutenticarUsuario,
    sair,
    verificarAutenticacao
}