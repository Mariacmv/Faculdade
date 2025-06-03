const Sequelize = require('sequelize');
const db = require('../db');

const AgendamentoConsulta = db.define('agendamento_consulta', { //definindo o model, como fica o banco de dados
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clinica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_consulta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hora_consulta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    observacao: {
        type: Sequelize.STRING
    }
});

module.exports = AgendamentoConsulta; //exporta a model