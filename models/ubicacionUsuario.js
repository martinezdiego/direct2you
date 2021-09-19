module.exports = (sequelize, DataTypes) => {
    const UbicacionUsuario = sequelize.define("UbicacionUsuario", {
        
    },{
        sequelize,
        tableName: "ubicacion_usuario",
        underscore: true,
        timestamps: false
    });
    
    UbicacionUsuario.associate = (models) => {
        
    }
    
    return UbicacionUsuario;
}; 
