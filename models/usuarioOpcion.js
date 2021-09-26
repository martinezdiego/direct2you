module.exports = (sequelize, DataTypes) => {
    const UsuarioOpcion = sequelize.define("UsuarioOpcion", {
        
    },{
        sequelize,
        tableName: "usuario_opcion",
        underscore: true,
        timestamps: false
    });
    
    UsuarioOpcion.associate = (models) => {
        
    }
    
    return UsuarioOpcion;
}; 
