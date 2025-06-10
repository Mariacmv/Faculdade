//crio um arquivo só para o controle das rotas. Crio rotas aqui e vinculo a uma função da controller
const express = require('express');
const router = express.Router(); //carregando o roteador do express

const usuarioController = require('../controllers/usuarioController');

router.get('/cadastro_usuario', usuarioController.getCadastroView);
router.get('/acessar', usuarioController.getLoginView);
router.get('/sair', usuarioController.sair); //finaliza a sessão do usuário
router.post('/cadastrar_usuario', usuarioController.postCadastrarUsuario);
router.post('/autenticar', usuarioController.postAutenticarUsuario);

module.exports = router; //exporto o roteador porque o uso em outros arquivos
