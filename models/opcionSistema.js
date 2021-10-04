module.exports = (sequelize, DataTypes) => {
    const OpcionSistema = sequelize.define("OpcionSistema", {
        id_opcion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_opcion: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "opcion_sistema",
        underscore: true,
        timestamps: false
    });    
    
    OpcionSistema.associate = (models) => {
        const { UsuarioOpcion, TipoUsuario } = models;
        
        OpcionSistema.belongsToMany(TipoUsuario, {
            through: UsuarioOpcion,
            foreignKey: 'fk_id_opcion'
        });
    }
    
    return OpcionSistema;
};
