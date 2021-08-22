module.exports = (sequelize, DataTypes) => {
    const ZonaResidencial = sequelize.define("ZonaResidencial", {
        id_zona_residencial: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_zona_residencial: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        sequelize,
        tableName: "zona_residencial",
        underscore: true,
        timestamps: false
    });
    
    ZonaResidencial.associate = (models) => {
        const { Ubicacion, Ciudad } = models;
        
        ZonaResidencial.hasMany(Ubicacion, {
            foreignKey: 'fk_id_sector'
        });
        ZonaResidencial.belongsTo(Ciudad, {
            foreignKey: 'fk_id_ciudad'
        });
    }
    
    return ZonaResidencial;
}; 
