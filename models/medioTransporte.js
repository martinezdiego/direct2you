module.exports = (sequelize, DataTypes) => {
    const MedioTransporte = sequelize.define("MedioTransporte", {
        id_medio_transporte: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        num_placa: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        estado_medio_transporte: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "medio_transporte",
        underscore: true,
        timestamps: false
    });

    MedioTransporte.associate = (models) => {
        const { TipoMedioTransporte } = models;

        MedioTransporte.belongsTo(TipoMedioTransporte, {
            foreignKey: "fk_id_tipo_medio_transporte"
        });
    };

    return MedioTransporte;

};