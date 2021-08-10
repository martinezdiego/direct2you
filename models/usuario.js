module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_usuario: DataTypes.STRING,
        apellido: DataTypes.STRING,
        correo_usuario: DataTypes.STRING,
        contrasena: DataTypes.STRING,
        num_telefono_usuario: DataTypes.STRING(15),
        num_cedula: DataTypes.STRING(15),
        estado_usuario: DataTypes.STRING(15),
        url_imagen_usuario: DataTypes.STRING(15)
    },{
        sequelize,
        tableName: "usuario",
        underscore: true,
        timestamps: false
    });
    return Usuario;
}; 
