module.exports = (sequelize, DataTypes) => {
    const CategoriaProducto = sequelize.define("CategoriaProducto", {
        id_categoria_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_categoria_producto: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }

    }, {
        sequelize,
        tableName: "categoria_producto",
        underscore: true,
        timestamps: false
    });

    CategoriaProducto.associate = (models) => {
        const { Producto } = models;

        CategoriaProducto.hasOne(Producto, {
            foreignKey: "fk_id_categoria_producto"
        });
    }

    return CategoriaProducto;
};