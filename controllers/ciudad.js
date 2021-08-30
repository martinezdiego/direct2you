const { Ciudad } = require('../models');

exports.create = async (req, res) => {
    const { body } = req;

    const data = {
        nombre_ciudad: body.nombre_ciudad
    };
    
    try {
        const response = await Ciudad.create(data);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when creating city."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const response = await Ciudad.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving cities."
        });
    }
};

exports.findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Ciudad.findByPk(id);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when retreaving city ${id}.`
        });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const data  = req.body;
    
    try {
        const response = await Ciudad.findByPk(id);
        
        response.nombre_ciudad = data.nombre_ciudad;
        
        await response.save();
        
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when updating city ${id}`
        });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Ciudad.destroy({
            where : { id_ciudad : id }
        });
        if (response == 1) {
            res.send({ status: true, message: "city has been deleted" });
        }
        else {
            res.send({ status: false, message: "city has not been deleted" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when deleting city ${id}`
        });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const numCities = await Ciudad.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${numCities} cities has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting cities"
        })
    }
};
