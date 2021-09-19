const { body, param, validationResult } = require('express-validator');

const { ProductoPedido, Pedido, Producto } = require('../models');


exports.create = [
    body('cantidad_producto_pedido')
    .exists()
    .withMessage('must be specified')
    .isInt()
    .withMessage('must be an integer'),
    body('fk_id_pedido')
    .exists()
    .withMessage('must be specified')
    .custom(async (value) => {
        const response = await Pedido.findByPk(value);
        if (!response) {
            throw new Error('invalid id');
        }
    }),
    body('fk_id_producto')
    .exists()
    .withMessage('must be specified')
    .custom(async (value) => {
        const response = await Producto.findByPk(value);
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
            cantidad_producto_pedido: body.cantidad_producto_pedido,
            fk_id_pedido: body.fk_id_pedido,
            fk_id_producto: body.fk_id_producto
        };
        
        try {
            const response = await ProductoPedido.create(data);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating entry."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await ProductoPedido.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving entries."
        });
    }
};

exports.findAllOfOrder = [
    param('id')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Pedido.findByPk(value);
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
            const response = await ProductoPedido.findAll({
                where: { fk_id_pedido : id }
            });
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving entries of order ${id}.`
            });
        }
    }
];

exports.deleteOneOfOrder = [
    param('orderId')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Pedido.findByPk(value);
        if (!response) {
            throw new Error('invalid id');
        }
    }),
    param('productId')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Producto.findByPk(value);
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
        
        const { orderId, productId } = req.params;
            
        try {
            const response = await ProductoPedido.destroy({
                where: { 
                    fk_id_pedido : orderId,
                    fk_id_producto: productId
                }
            });
            if (response == 1) {
                res.send({ status: true, message: "product has been deleted from order" });
            }
            else {
                res.send({ status: false, message: "product has not been deleted from order" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entry of order ${orderId} and product ${productId}.`
            });
        }
    }
];

exports.deleteAllOfOrder = [
    param('id')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Pedido.findByPk(value);
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
            const response = await ProductoPedido.destroy({
                where: { 
                    fk_id_pedido : id,
                }
            });
            res.send({
                status: true,
                message: `${response} entries has been deleted`
            });
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entries of order ${id}.`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await ProductoPedido.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} entries has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting entries"
        })
    }
};
