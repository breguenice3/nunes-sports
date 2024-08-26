const { Sequelize } = require('sequelize')
const Produto = require('./Posts')

//conexao com banco de dados mysql
const sequelize = new Sequelize('produtos', 'root', 'Binha#3285', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(()=> console.log('Conexão com banco de dados bem-sucedida.')).catch(err => console.log('Não foi possível conectar ao banco de dados: ', err))

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}