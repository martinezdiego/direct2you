module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", {
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fecha_pedido: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estado_pedido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        monto_pedido: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estado_de_cobranza: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "pedido",
        underscore: true,
        timestamps: false
    });

    Pedido.associate = (models) => {
        const { Empresa, Pago, Usuario, MedioTransporte, Ubicacion, Reclamo } = models;

        Pedido.belongsTo(Empresa, {
            foreignKey: "fk_id_empresa"
        });
        Pedido.belongsTo(Pago, {
            foreignKey: "fk_id_pago"
        });
        Pedido.belongsTo(Usuario, {
            foreignKey: "fk_id_usuario"
        });
        Pedido.belongsTo(MedioTransporte, {
            foreignKey: "fk_id_medio_transporte"
        });
        Pedido.belongsTo(Ubicacion, {
            foreignKey: "fk_id_ubicacion"
        });
        Pedido.hasOne(Reclamo, {
            foreignKey: "fk_id_pedido"
        });
    }

    return Pedido;
};