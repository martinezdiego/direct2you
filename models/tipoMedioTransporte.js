module.exports = (sequelize, DataTypes) => {
    const TipoMedioTransporte = sequelize.define("TipoMedioTransporte", {
        id_tipo_medio_transporte: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_tipo_medio_transporte: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        tableName: "tipo_medio_transporte",
        underscore: true,
        timestamps: false
    });

    TipoMedioTransporte.associate = (models) => {
        const { MedioTransporte } = models;

        TipoMedioTransporte.hasOne(MedioTransporte, {
            foreignKey: "fk_id_tipo_medio_transporte"
        });
    };

    return TipoMedioTransporte;
};