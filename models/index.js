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
models.CategoriaEmpresa = require('./categoriaEmpresa')(sequelize, DataTypes);
models.Ubicacion = require('./ubicacion')(sequelize, DataTypes);
models.Ciudad = require('./ciudad')(sequelize, DataTypes);
models.ZonaResidencial = require('./zonaResidencial')(sequelize, DataTypes);
models.Producto = require('./producto')(sequelize, DataTypes);
models.CategoriaProducto = require('./categoriaProducto')(sequelize, DataTypes);
models.MedioTransporte = require('./medioTransporte')(sequelize, DataTypes);
models.TipoMedioTransporte = require('./tipoMedioTransporte')(sequelize, DataTypes);
models.MetodoPago = require('./metodoPago')(sequelize, DataTypes);
models.Pedido = require('./pedido')(sequelize, DataTypes);
models.Pago = require('./pago')(sequelize, DataTypes);
models.Reclamo = require('./reclamo')(sequelize, DataTypes);
models.UbicacionUsuario = require('./ubicacionUsuario')(sequelize, DataTypes);
models.MetodoDePagoEmpresa = require('./metodoDePagoEmpresa')(sequelize, DataTypes);

models.TipoUsuario.associate(models);
models.Usuario.associate(models);
models.Empresa.associate(models);
models.CategoriaEmpresa.associate(models);
models.Ubicacion.associate(models);
models.Ciudad.associate(models);
models.ZonaResidencial.associate(models);
models.Producto.associate(models);
models.CategoriaProducto.associate(models);
models.MedioTransporte.associate(models);
models.TipoMedioTransporte.associate(models);
models.MetodoPago.associate(models);
models.Pedido.associate(models);
models.Pago.associate(models);
models.Reclamo.associate(models);
models.UbicacionUsuario.associate(models);
models.MetodoDePagoEmpresa.associate(models);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
