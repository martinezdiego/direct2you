const { body, param, validationResult } = require('express-validator');

const { Pedido } = require('../models');

exports.create = [
    body('fecha_pedido')
        .exists()
        .withMessage('must be specified'),        
    body('estado_pedido')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 or less than 16'),
    body('monto_pedido')
        .exists()
        .withMessage('must be specified'),        
    body('estado_de_cobranza')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 or less than 16'),
    body('fk_id_empresa')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_pago')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_usuario')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_medio_transporte')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_ubicacion')
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
            fecha_pedido: body.fecha_pedido,
            estado_pedido: body.estado_pedido,
            monto_pedido: body.monto_pedido,
            estado_de_cobranza: body.estado_de_cobranza,
            fk_id_empresa: body.fk_id_empresa,
            fk_id_pago: body.fk_id_pago,
            fk_id_usuario: body.fk_id_usuario,
            fk_id_medio_transporte: body.fk_id_medio_transporte,
            fk_id_ubicacion: body.fk_id_ubicacion
        };

        try {
            const pedido = await Pedido.create(data);
            res.send(pedido);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating order."
            });
        }
    }       
];

exports.findAll = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.send(pedidos);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when fetching orders."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const pedido = await Pedido.findByPk(value);
            if (pedido === null){
                throw new Error('invalid order id');
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
            const pedido = await Pedido.findByPk(id);
            res.send(pedido);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when fetching order ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .custom(async (value) => {
            const pedido = await Pedido.findByPk(value);
            if (!pedido) {
                throw new Error('invalid order id');
            }
            return true;
        }),
    body('fecha_pedido')
        .exists()
        .withMessage('must be specified'),        
    body('estado_pedido')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 or less than 16'),
    body('monto_pedido')
        .exists()
        .withMessage('must be specified'),        
    body('estado_de_cobranza')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 or less than 16'),
    body('fk_id_empresa')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_pago')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_usuario')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_medio_transporte')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_ubicacion')
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
            const pedido = await Pedido.findByPk(id);

            pedido.fecha_pedido = data.fecha_pedido,
            pedido.estado_pedido = data.estado_pedido,
            pedido.monto_pedido = data.monto_pedido,
            pedido.estado_de_cobranza = data.estado_de_cobranza,
            pedido.fk_id_empresa = data.fk_id_empresa,
            pedido.fk_id_pago = data.fk_id_pago,
            pedido.fk_id_usuario = data.fk_id_usuario,
            pedido.fk_id_medio_transporte = data.fk_id_medio_transporte,
            pedido.fk_id_ubicacion = data.fk_id_ubicacion           

            await pedido.save();

            res.send(pedido);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating order ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const pedido = await Pedido.findByPk(value);
            if(!pedido) {
                throw new Error('invalid order id');
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
            const response = await Pedido.destroy({
                where: { id_pedido: id }
            });
            if(response == 1) {
                res.send({ status: true, message: "order has been deleted" });
            }
            else {
                res.send({ status: false, message: "order has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting order ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const numOrders = await Pedido.destroy({
            where: {},
            truncate: false
        });
        res.send({
            status: true,
            message: `${numOrders} orders has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting orders"
        })
    }
};