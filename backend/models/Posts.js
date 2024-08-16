const { DataTypes } = require('sequelize')
const {sequelize} = require('./db')

const Produto = sequelize.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}
)

module.exports = Produto;