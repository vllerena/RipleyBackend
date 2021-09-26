const mysqlConfig = require('../config/mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.user, mysqlConfig.password, {
    host: mysqlConfig.host,
    dialect: mysqlConfig.dialect,
    operatorAliases: false,
    pool: {
        max: mysqlConfig.pool.max,
        min: mysqlConfig.pool.min,
        acquire: mysqlConfig.pool.acquire,
        idle: mysqlConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = require('./clientesModel')(sequelize, Sequelize);

module.exports = db;