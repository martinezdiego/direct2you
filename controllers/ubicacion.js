const { body, param, validationResult } = require('express-validator');

const { Ubicacion, Ciudad, ZonaResidencial } = require('../models');

exports.create = [
    body('alias')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('calle')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('edificio_casa')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('piso_apto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('punto_referencia')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('fk_id_ciudad')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    body('fk_id_sector')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await ZonaResidencial.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
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
    }
];

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

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ubicacion.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
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
    }
];

exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ubicacion.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    body('alias')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('calle')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('edificio_casa')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('piso_apto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('punto_referencia')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('fk_id_ciudad')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    body('fk_id_sector')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await ZonaResidencial.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
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
    }
];

exports.delete = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ubicacion.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
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
    }
];

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
