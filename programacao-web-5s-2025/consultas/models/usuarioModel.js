const Sequelize = require('sequelize');
const db = require('../db');

const Usuario = db.define('usuario', { //definindo o model, como fica o banco de dados
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Usuario; //exporta a model