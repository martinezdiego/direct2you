module.exports = (sequelize, DataTypes) => {
    const CategoriaEmpresa = sequelize.define("CategoriaEmpresa", {
        id_categoria_empresa: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_categoria_empresa: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        sequelize,
        tableName: "categoria_empresa",
        underscore: true,
        timestamps: false
    });
    
    CategoriaEmpresa.associate = (models) => {
        const { Empresa } = models;
        
        CategoriaEmpresa.hasOne(Empresa, {
            foreignKey: "fk_id_categoria_empresa"
        });
    }
    
    return CategoriaEmpresa;
}; 
