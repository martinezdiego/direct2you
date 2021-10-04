module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto", {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_producto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidad_producto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descripcion_producto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estado_producto: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        url_imagen_producto: {
            type: DataTypes.STRING,
            allowNull: true
        }        
    },{
        sequelize,
        tableName: "producto",
        underscore: true,
        timestamps: false
    });

    Producto.associate = (models) => {
        const { CategoriaProducto, Empresa, ProductoEmpresa, ProductoPedido, Pedido } = models;

        Producto.belongsTo(CategoriaProducto, {
            foreignKey: "fk_id_categoria_producto"
        });
        Producto.belongsToMany(Empresa, {
            through: ProductoEmpresa,
            foreignKey: 'producto_id_producto'
        });
        Producto.belongsToMany(Pedido, {
            through: ProductoPedido,
            foreignKey: 'fk_id_producto'
        });
    }

    return Producto;
};
