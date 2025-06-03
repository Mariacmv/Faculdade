//arquivo para o banco de dados
const Sequelize = require('sequelize'); //importando o pacote sequelize; tem que instalá-lo
const sequelize = new Sequelize({ //configuração da conexão com banco de dados
    dialect: 'sqlite', //dialect - dialogar com quem
    storage: './database.sqlite' 
}); //criando uma instância do pacote

module.exports = sequelize; //exportar o pacote para fora do arquivo
