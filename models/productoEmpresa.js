module.exports = (sequelize, DataTypes) => {
    const ProductoEmpresa = sequelize.define("ProductoEmpresa", {
        
    },{
        sequelize,
        tableName: "producto_empresa",
        underscore: true,
        timestamps: false
    });
    
    ProductoEmpresa.associate = (models) => {
        
    }
    
    return ProductoEmpresa;
}; 
