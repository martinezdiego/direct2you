const { body, param, validationResult } = require('express-validator');

const { MetodoPago } = require('../models');

exports.create = [
    body('nombre_metodo_de_pago')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')        
        .custom(async (value) => {
            const response = await MetodoPago.findOne({ where: { nombre_metodo_de_pago: value } });
            if (response) {
                throw new Error('payment method already exists');
            }
            return true;
        }),
    body('url_imagen_metodo_de_pago')
        .exists()
        .withMessage('must be specified')
        .trim(),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { body } = req;

        const data = {
            nombre_metodo_de_pago: body.nombre_metodo_de_pago,
            url_imagen_metodo_de_pago: body.url_imagen_metodo_de_pago
        };

        try {
            const response = await MetodoPago.create(data);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating payment method."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await MetodoPago.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving payment methods."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await MetodoPago.findByPk(value);
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
            const response = await MetodoPago.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving payment method ${id}.`
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
            const response = await MetodoPago.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    body('nombre_metodo_de_pago')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('url_imagen_metodo_de_pago')
        .exists()
        .withMessage('must be specified')
        .trim(),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { id } = req.params;
        const data  = req.body;
        
        try {
            const metodo = await MetodoPago.findByPk(id);
            
            metodo.nombre_metodo_de_pago = data.nombre_metodo_de_pago;
            metodo.url_imagen_metodo_de_pago = data.url_imagen_metodo_de_pago;            
            
            await metodo.save();
            
            res.send(metodo);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating payment method ${id}`
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
            const response = await MetodoPago.findByPk(value);
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
            const response = await MetodoPago.destroy({
                where : { id_metodo_de_pago : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "payment method has been deleted" });
            }
            else {
                res.send({ status: false, message: "payment method has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting payment method ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await MetodoPago.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} payment methods has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting payment methods"
        })
    }
};