module.exports = (sequelize, DataTypes) => {
    const TipoUsuario = sequelize.define("TipoUsuario", {
        id_tipo_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_tipo_usuario: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: "tipo_usuario",
        underscore: true,
        timestamps: false
    });
    
    TipoUsuario.associate = (models) => {
        const { Usuario, OpcionSistema, UsuarioOpcion } = models;
        
        TipoUsuario.hasOne(Usuario, {
            foreignKey: "fk_tipo_usuario"
        });
        TipoUsuario.belongsToMany(OpcionSistema, {
            through: UsuarioOpcion,
            foreignKey: 'fk_id_tipo_usuario'
        });
    };
    
    return TipoUsuario;
};
