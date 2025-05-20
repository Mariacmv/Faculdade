//crio um arquivo só para o controle das rotas. Crio rotas aqui e vinculo a uma função da controller
const express = require('express');
const router = express.Router(); //carregando o roteador do express

const agendamentoController = require('./controllers/agendamentoController') //importo o módulo que criei

router.get('/', agendamentoController.getIndexView); //associo a rota a função que está na controller
router.post('/agendar_consulta', agendamentoController.postAgendarConsulta);

module.exports = router; //exporto o roteador porque o uso em outros arquivos
