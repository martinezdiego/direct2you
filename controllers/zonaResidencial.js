const { ZonaResidencial } = require('../models');

exports.create = async (req, res) => {
    const { body } = req;

    const data = {
        nombre_zona_residencial: body.nombre_zona_residencial,
        fk_id_ciudad: body.fk_id_ciudad
    };
    
    try {
        const response = await ZonaResidencial.create(data);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when creating residential zone."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const response = await ZonaResidencial.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving residential zones."
        });
    }
};

exports.findOne = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await ZonaResidencial.findByPk(id);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when retreaving residential zone ${id}.`
        });
    }
};
exports.update = async (req, res) => {
    const { id } = req.params;
    const data  = req.body;
    
    try {
        const response = await ZonaResidencial.findByPk(id);
        
        response.nombre_zona_residencial = data.nombre_zona_residencial;
        response.fk_id_ciudad = data.fk_id_ciudad;
        
        await response.save();
        
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when updating residential zone ${id}`
        });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await ZonaResidencial.destroy({
            where : { id_zona_residencial : id }
        });
        if (response == 1) {
            res.send({ status: true, message: "residential zone has been deleted" });
        }
        else {
            res.send({ status: false, message: "residential zone has not been deleted" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when deleting residential zone ${id}`
        });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const numResidentialZones = await ZonaResidencial.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${numResidentialZones} cities has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting residential zones"
        })
    }
};
