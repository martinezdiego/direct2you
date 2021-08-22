const { CategoriaEmpresa } = require('../models');

exports.create = async (req, res) => {
    const { body } = req;

    const data = {
        nombre_categoria_empresa: body.nombre_categoria_empresa,
    };
    
    try {
        const response = await CategoriaEmpresa.create(data);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when creating company category."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const response = await CategoriaEmpresa.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving company categories."
        });
    }
};

exports.findOne = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await CategoriaEmpresa.findByPk(id);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when retreaving company category ${id}.`
        });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const data  = req.body;
    
    try {
        const categoria = await CategoriaEmpresa.findByPk(id);
        
        categoria.nombre_categoria_empresa = data.nombre_categoria_empresa;
        
        await categoria.save();
        
        res.send(categoria);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when updating company category ${id}`
        });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await CategoriaEmpresa.destroy({
            where : { id_categoria_empresa : id }
        });
        if (response == 1) {
            res.send({ status: true, message: "company category has been deleted" });
        }
        else {
            res.send({ status: false, message: "company category has not been deleted" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when deleting company category ${id}`
        });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const response = await CategoriaEmpresa.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} company categories has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting company categories"
        })
    }
};
