const { Sequelize, DataTypes } = require('sequelize');

const settings = require('../settings');

const dbSettings = settings[settings.env].db;

const sequelize = new Sequelize(dbSettings.name, dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: dbSettings.dialect,
}); 

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.tipoUsuario = require('./tipoUsuario')(sequelize, DataTypes);
db.usuario = require('./usuario')(sequelize, DataTypes);

db.tipoUsuario.hasOne(db.usuario, {
    foreignKey: "fk_tipo_usuario"
});
db.usuario.belongsTo(db.tipoUsuario,
    {
        foreignKey: "fk_tipo_usuario"
    }
);

module.exports = db;