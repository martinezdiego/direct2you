module.exports = (sequelize, DataTypes) => {
    const ProductoPedido = sequelize.define("ProductoPedido", {
        cantidad_producto_pedido: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "producto_pedido",
        underscore: true,
        timestamps: false
    });
    
    ProductoPedido.associate = (models) => {
        
    }
    
    return ProductoPedido;
}; 
