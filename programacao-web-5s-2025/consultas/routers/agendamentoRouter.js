//crio um arquivo só para o controle das rotas. Crio rotas aqui e vinculo a uma função da controller
const express = require('express');
const router = express.Router(); //carregando o roteador do express

const agendamentoController = require('../controllers/agendamentoController') //importo o módulo que criei
const usuarioController = require('../controllers/usuarioController');

//adiciona também a função de verificar autenticação do usuário
router.get('/', usuarioController.verificarAutenticacao, agendamentoController.getIndexView); //associo a rota a função que está na controller
router.get('/agendamentos', usuarioController.verificarAutenticacao, agendamentoController.getAgendamentosView);
router.post('/agendar_consulta', usuarioController.verificarAutenticacao, agendamentoController.postAgendarConsulta);

module.exports = router; //exporto o roteador porque o uso em outros arquivos
