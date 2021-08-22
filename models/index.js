const { Sequelize, DataTypes } = require('sequelize');

const settings = require('../settings');

const dbSettings = settings[settings.env].db;

const sequelize = new Sequelize(dbSettings.name, dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: dbSettings.dialect,
}); 

const models = {};

models.TipoUsuario = require('./tipoUsuario')(sequelize, DataTypes);
models.Usuario = require('./usuario')(sequelize, DataTypes);
models.Empresa = require('./empresa')(sequelize, DataTypes);

models.TipoUsuario.associate(models);
models.Usuario.associate(models);
models.Empresa.associate(models);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
