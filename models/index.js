const { Sequelize } = require('sequelize');

const settings = require('../settings');

const dbSettings = settings[settings.env].db;

const sequelize = new Sequelize(dbSettings.name, dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: dbSettings.dialect,
}); 

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;