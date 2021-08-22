module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define("Empresa", {
        id_empresa: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_empresa: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        correo_empresa: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        num_telefono_empresa: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        num_rif: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        estado_empresa: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        url_imagen_empresa: DataTypes.STRING(45)
    },{
        sequelize,
        tableName: "empresa",
        underscore: true,
        timestamps: false
    });
    
    Empresa.associate = (models) => {
        
    }
    
    return Empresa;
}; 
