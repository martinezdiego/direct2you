module.exports = (sequelize, DataTypes) => {
    const MetodoDePagoEmpresa = sequelize.define("MetodoDePagoEmpresa", {
        datos_pago_empresa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: "metodo_de_pago_empresa",
        underscore: true,
        timestamps: false
    });
    
    MetodoDePagoEmpresa.associate = (models) => {
        
    }
    
    return MetodoDePagoEmpresa;
}; 
