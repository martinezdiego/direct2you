module.exports = (sequelize, DataTypes) => {
    const MetodoPago = sequelize.define("MetodoPago", {
        id_metodo_de_pago: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_metodo_de_pago: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        url_imagen_metodo_de_pago: {
            type: DataTypes.STRING            
        }
    },{
        sequelize,
        tableName: "metodo_de_pago",
        underscore: true,
        timestamps: false
    });

    MetodoPago.associate = (models) => {
        const { Pago } = models;

        MetodoPago.hasMany(Pago, {
            foreignKey: "fk_id_metodo_de_pago"
        });
    }

    return MetodoPago;
};