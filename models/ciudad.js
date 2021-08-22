module.exports = (sequelize, DataTypes) => {
    const Ciudad = sequelize.define("Ciudad", {
        id_ciudad: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_ciudad: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        sequelize,
        tableName: "ciudad",
        underscore: true,
        timestamps: false
    });
    
    Ciudad.associate = (models) => {
        const { Ubicacion, ZonaResidencial } = models;
        
        Ciudad.hasMany(Ubicacion, {
            foreignKey: 'fk_id_ciudad'
        });
        Ciudad.hasMany(ZonaResidencial, {
            foreignKey: 'fk_id_ciudad'
        });
    }
    
    return Ciudad;
}; 
