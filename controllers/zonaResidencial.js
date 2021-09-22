const { body, param, validationResult } = require('express-validator');

const { ZonaResidencial, Ciudad } = require('../models');

exports.create = [
    body('nombre_zona_residencial')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z ]+$/)
        .withMessage('must have only letters and blank spaces')
        .custom(async (value) => {
            const response = await ZonaResidencial.findOne({ 
                where: { nombre_zona_residencial: value } 
            });
            if (response) {
                throw new Error('residential zone already exists');
            }
        }),
    body('fk_id_ciudad')
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
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
    }
];

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

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .trim()
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
        
        try {
            const response = await ZonaResidencial.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving residential zone ${id}.`
            });
        }
    }
];
exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await ZonaResidencial.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    body('nombre_zona_residencial')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z ]+$/)
        .withMessage('must have only letters and blank spaces')
        .custom(async (value) => {
            const response = await ZonaResidencial.findOne({ 
                where: { nombre_zona_residencial: value } 
            });
            if (response) {
                throw new Error('residential zone already exists');
            }
        }),
    body('fk_id_ciudad')
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
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
    }
];

exports.delete = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await ZonaResidencial.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    async (req, res) => {
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
    }
];

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
