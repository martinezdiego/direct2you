module.exports = (sequelize, DataTypes) => {
    const TipoUsuario = sequelize.define("TipoUsuario", {
        id_tipo_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_tipo_usuario: DataTypes.STRING
    }, {
        sequelize,
        tableName: "tipo_usuario",
        underscore: true,
        timestamps: false
    });
    return TipoUsuario;
};