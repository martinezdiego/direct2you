const { body, param, validationResult } = require('express-validator');

const { OpcionSistema } = require('../models');

exports.create = [
    body('nombre_opcion')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 45 })
        .withMessage('must have length more than 0 and less than 46')        
        .custom(async (value) => {
            const response = await OpcionSistema.findOne({ where: { nombre_opcion: value } });
            if (response) {
                throw new Error('system option already exists');
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
            nombre_opcion: body.nombre_opcion            
        };

        try {
            const response = await OpcionSistema.create(data);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating system option."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await OpcionSistema.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving system options."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await OpcionSistema.findByPk(value);
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
            const response = await OpcionSistema.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving system option ${id}.`
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
            const response = await OpcionSistema.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    body('nombre_opcion')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 45 })
        .withMessage('must have length more than 0 and less than 46')        
        .custom(async (value) => {
            const response = await OpcionSistema.findOne({ where: { nombre_opcion: value } });
            if (response) {
                throw new Error('system option already exists');
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
            const opcion = await OpcionSistema.findByPk(id);
            
            opcion.nombre_opcion = data.nombre_opcion;           
            
            await opcion.save();
            
            res.send(opcion);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating system option ${id}`
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
            const response = await OpcionSistema.findByPk(value);
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
            const response = await OpcionSistema.destroy({
                where : { id_opcion : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "system option has been deleted" });
            }
            else {
                res.send({ status: false, message: "system option has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting system option ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await OpcionSistema.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} system options has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting system options"
        })
    }
};