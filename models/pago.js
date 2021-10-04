module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define("Pago", {
        id_pago: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        num_transaccion: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        monto_pago: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fecha_pago: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "pago",
        underscore: true,
        timestamps: false
    });

    Pago.associate = (models) => {
        const { MetodoPago } = models;

        Pago.belongsTo(MetodoPago, {
            foreignKey: "fk_id_metodo_de_pago"
        });
    }

    return Pago;
};