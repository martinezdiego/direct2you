module.exports = (sequelize, DataTypes) => {
    const Ubicacion = sequelize.define("Ubicacion", {
        id_ubicacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        alias: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        calle: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        edificio_casa: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        piso_apto: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        punto_referencia: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "ubicacion",
        underscore: true,
        timestamps: false
    });
    
    Ubicacion.associate = (models) => {
        const { Ciudad, ZonaResidencial, Empresa, Pedido, UbicacionUsuario, Usuario } = models;
        
        Ubicacion.belongsTo(Ciudad, {
            foreignKey: 'fk_id_ciudad'
        });
        Ubicacion.belongsTo(ZonaResidencial, {
            foreignKey: 'fk_id_sector'
        });
        Ubicacion.hasOne(Empresa, {
            foreignKey: "fk_id_ubicacion"
        });
        Ubicacion.hasMany(Pedido, {
            foreignKey: 'fk_id_ubicacion'
        });
        Ubicacion.belongsToMany(Usuario, {
            through: UbicacionUsuario,
            foreignKey: 'fk_id_ubicacion'
        });
    }
    
    return Ubicacion;
}; 
