const { body, param, validationResult } = require('express-validator');

const { TipoMedioTransporte } = require('../models');

exports.create = [
    body('nombre_tipo_medio_transporte')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .custom(async (value) => {
            const response = await TipoMedioTransporte.findOne({ where: { nombre_tipo_medio_transporte: value } });
            if (response) {
                throw new Error('transport type already exists');
            }
            return true;
        }),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { body } = req;

        const data = {
            nombre_tipo_medio_transporte: body.nombre_tipo_medio_transporte
        };

        try {
            const response = await TipoMedioTransporte.create(data);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating transport type."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await TipoMedioTransporte.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving transport types."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await TipoMedioTransporte.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { id } = req.params;
        
        try {
            const response = await TipoMedioTransporte.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving transport type ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await TipoMedioTransporte.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    body('nombre_tipo_medio_transporte')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .custom(async (value) => {
            const response = await TipoMedioTransporte.findOne({ where: { nombre_tipo_medio_transporte: value } });
            if (response) {
                throw new Error('transport type already exists');
            }
            return true;
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
            const tipo = await TipoMedioTransporte.findByPk(id);
            
            tipo.nombre_tipo_medio_transporte = data.nombre_tipo_medio_transporte;
            
            await tipo.save();
            
            res.send(tipo);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating transport type ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await TipoMedioTransporte.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { id } = req.params;
        
        try {
            const response = await TipoMedioTransporte.destroy({
                where : { id_tipo_medio_transporte : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "transport type has been deleted" });
            }
            else {
                res.send({ status: false, message: "transport type has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting transport type ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await TipoMedioTransporte.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} transport types has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting transport types"
        })
    }
};