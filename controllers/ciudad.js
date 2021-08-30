const { body, param, validationResult } = require('express-validator');

const { Ciudad } = require('../models');

exports.create = [
    body('nombre_ciudad')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('must have only letters')
        .custom(async (value) => {
            const response = await Ciudad.findOne({ where: { nombre_ciudad: value } });
            if (response) {
                throw new Error('city already exists');
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
    }
];

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

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
            if (!response) {
                throw new Error('invalid city id');
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
            const response = await Ciudad.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving city ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
            if (!response) {
                throw new Error('invalid city id');
            }
        }),
    body('nombre_ciudad')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('must have only letters')
        .custom(async (value) => {
            const response = await Ciudad.findOne({ where: { nombre_ciudad: value } });
            if (response) {
                throw new Error('city already exists');
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
    }
];

exports.delete = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await Ciudad.findByPk(value);
            if (!response) {
                throw new Error('invalid city id');
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
    }
];

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
