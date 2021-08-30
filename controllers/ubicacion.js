const { Ubicacion } = require('../models');

exports.create = async (req, res) => {
    const { body } = req;

    const data = {
        alias: body.alias,
        calle: body.calle,
        edificio_casa: body.edificio_casa,
        piso_apto: body.piso_apto,
        punto_referencia: body.punto_referencia,
        fk_id_ciudad: body.fk_id_ciudad,
        fk_id_sector: body.fk_id_sector
    };
    
    try {
        const response = await Ubicacion.create(data);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when creating location."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const response = await Ubicacion.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving locations."
        });
    }
};

exports.findOne = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await Ubicacion.findByPk(id);
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when retreaving location ${id}.`
        });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const data  = req.body;
    
    try {
        const response = await Ubicacion.findByPk(id);
        
        response.alias = data.alias;
        response.calle = data.calle;
        response.edificio_casa = data.edificio_casa;
        response.piso_apto = data.piso_apto;
        response.punto_referencia = data.punto_referencia;
        response.fk_id_ciudad = data.fk_id_ciudad;
        response.fk_id_sector = data.fk_id_sector;
        
        await response.save();
        
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when updating location ${id}`
        });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
        
    try {
        const response = await Ubicacion.destroy({
            where : { id_ubicacion : id }
        });
        if (response == 1) {
            res.send({ status: true, message: "location has been deleted" });
        }
        else {
            res.send({ status: false, message: "location has not been deleted" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `unexpected error has been occurred when deleting location ${id}`
        });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const numLocations = await Ciudad.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${numLocations} locations has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting locations"
        })
    }
};
