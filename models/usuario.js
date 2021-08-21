module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_usuario: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo_usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        num_telefono_usuario: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        num_cedula: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        estado_usuario: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        url_imagen_usuario: DataTypes.STRING(45)
    },{
        sequelize,
        tableName: "usuario",
        underscore: true,
        timestamps: false
    });
    
    Usuario.associate = (models) => {
        const { TipoUsuario } = models;
        
        Usuario.belongsTo(TipoUsuario, {
            foreignKey: "fk_tipo_usuario"
        });
    }
    
    return Usuario;
}; 
