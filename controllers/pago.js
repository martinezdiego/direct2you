const { body, param, validationResult } = require('express-validator');

const { Pago } = require('../models');

exports.create = [
    body('num_transaccion')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256')
        .custom(async (value) => {
            const response = await Pago.findOne({ where: { num_transaccion: value } });
            if (response) {
                throw new Error('payment number already exists');
            }
            return true;
        }),        
    body('monto_pago')
        .exists()
        .withMessage('must be specified'),
    body('fecha_pago')
        .exists()
        .withMessage('must be specified'),        
    body('fk_id_metodo_de_pago')
        .exists()
        .withMessage('must be specified'),    
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { body } = req;

        const data = {
            num_transaccion: body.num_transaccion,
            monto_pago: body.monto_pago,
            fecha_pago: body.fecha_pago,
            fk_id_metodo_de_pago: body.fk_id_metodo_de_pago
        };

        try {
            const pago = await Pago.create(data);
            res.send(pago);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating payment."
            });
        }
    }       
];

exports.findAll = async (req, res) => {
    try {
        const pagos = await Pago.findAll();
        res.send(pagos);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when fetching payments."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const pago = await Pago.findByPk(value);
            if (pago === null){
                throw new Error('invalid payment id');
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
            const pago = await Pago.findByPk(id);
            res.send(pago);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when fetching payment ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .custom(async (value) => {
            const pago = await Pago.findByPk(value);
            if (!pago) {
                throw new Error('invalid payment id');
            }
            return true;
        }),
    body('num_transaccion')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256'),        
    body('monto_pago')
        .exists()
        .withMessage('must be specified'),
    body('fecha_pago')
        .exists()
        .withMessage('must be specified'),        
    body('fk_id_metodo_de_pago')
        .exists()
        .withMessage('must be specified'),
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { id } = req.params;
        const data = req.body;

        try {
            const pago = await Pago.findByPk(id);

            pago.num_transaccion = data.num_transaccion,
            pago.monto_pago = data.monto_pago,
            pago.fecha_pago = data.fecha_pago,
            pago.fk_id_metodo_de_pago = data.fk_id_metodo_de_pago         

            await pago.save();

            res.send(pago);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating payment ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const pago = await Pago.findByPk(value);
            if(!pago) {
                throw new Error('invalid payment id');
            }
            return true;
        }),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { id } = req.params;
        try {
            const response = await Pago.destroy({
                where: { id_pago: id }
            });
            if(response == 1) {
                res.send({ status: true, message: "payment has been deleted" });
            }
            else {
                res.send({ status: false, message: "payment has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting payment ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const numPayments = await Pago.destroy({
            where: {},
            truncate: false
        });
        res.send({
            status: true,
            message: `${numPayments} payments has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting payments"
        })
    }
};