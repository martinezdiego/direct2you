module.exports = (sequelize, DataTypes) => {
    const Reclamo = sequelize.define("Reclamo", {
        id_reclamo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fecha_reclamo: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion_reclamo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado_reclamo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "reclamo",
        underscore: true,
        timestamps: false
    });

    Reclamo.associate = (models) => {
        const { Usuario, Pedido } = models;

        Reclamo.belongsTo(Usuario, {
            foreignKey: "fk_id_usuario"
        });

        Reclamo.belongsTo(Pedido, {
            foreignKey: "fk_id_pedido"
        });
    }

    return Reclamo;
};