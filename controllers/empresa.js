const { Empresa } = require('../models');

exports.create = async (req, res) => {
    const { body } = req;

    const data = {
        nombre_empresa: body.nombre_empresa,
        correo_empresa: body.correo_empresa,
        num_telefono_empresa: body.num_telefono_empresa,
        num_rif: body.num_rif,
        estado_empresa: body.estado_empresa,
        url_imagen_empresa: body.url_imagen_empresa,
        fk_id_categoria_empresa: body.fk_id_categoria_empresa,
        fk_id_ubicacion: body.fk_id_ubicacion
    };
    
    try {
        const response = await Empresa.create(data);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when creating company."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const response = await Empresa.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving companies."
        });
    }
};

exports.findOne = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await Empresa.findByPk(id);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when retreaving company ${id}.`
        });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const data  = req.body;
    
    try {
        const empresa = await Empresa.findByPk(id);
        
        empresa.nombre_empresa = data.nombre_empresa;
        empresa.correo_empresa = data.correo_empresa;
        empresa.num_telefono_empresa = data.num_telefono_empresa;
        empresa.num_rif = data.num_rif;
        empresa.estado_empresa = data.estado_empresa;
        empresa.url_imagen_empresa = data.url_imagen_empresa;
        empresa.fk_id_categoria_empresa = data.fk_id_categoria_empresa;
        empresa.fk_id_ubicacion = data.fk_id_ubicacion;
        
        await empresa.save();
        
        res.send(empresa);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when updating company ${id}`
        });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await Empresa.destroy({
            where : { id_empresa : id }
        });
        if (response == 1) {
            res.send({ status: true, message: "company has been deleted" });
        }
        else {
            res.send({ status: false, message: "company has not been deleted" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when deleting company ${id}`
        });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const response = await Empresa.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} companies has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting companies"
        })
    }
};
