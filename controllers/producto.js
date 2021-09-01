const { body, param, validationResult } = require('express-validator');

const { Producto } = require('../models');

exports.create = [
    body('nombre_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('cantidad_producto')
        .exists()
        .withMessage('must be specified'),
    body('descripcion_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256'),
    body('precio')
        .exists()
        .withMessage('must be specified'),
    body('estado_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 }),
    body('url_imagen_producto')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_categoria_producto')
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
            nombre_producto: body.nombre_producto,
            cantidad_producto: body.cantidad_producto,
            descripcion_producto: body.descripcion_producto,
            precio: body.precio,
            estado_producto: body.estado_producto,
            url_imagen_producto: body.url_imagen_producto,
            fk_id_categoria_producto: body.fk_id_categoria_producto
        };

        try {
            const producto = await Producto.create(data);
            res.send(producto);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating product."
            });
        }
    }       
];

exports.findAll = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.send(productos);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when fetching products."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const producto = await Producto.findByPk(value);
            if (producto === null){
                throw new Error('invalid product id');
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
            const producto = await Producto.findByPk(id);
            res.send(producto);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when fetching product ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .custom(async (value) => {
            const producto = await Producto.findByPk(value);
            if (!producto) {
                throw new Error('invalid product id');
            }
            return true;
        }),
    body('nombre_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256'),
    body('cantidad_producto')
        .exists()
        .withMessage('must be specified'),
    body('descripcion_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256'),
    body('precio')
        .exists()
        .withMessage('must be specified'),
    body('estado_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 }),
    body('url_imagen_producto')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_categoria_producto')
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
            const producto = await Producto.findByPk(id);

            producto.nombre_producto = data.nombre_producto,
            producto.cantidad_producto = data.cantidad_producto,
            producto.descripcion_producto = data.descripcion_producto,
            producto.precio = data.precio,
            producto.estado_producto = data.estado_producto,
            producto.url_imagen_producto = data.url_imagen_producto,
            producto.fk_id_categoria_producto = data.fk_id_categoria_producto

            await producto.save();

            res.send(producto);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating product ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const producto = await Producto.findByPk(value);
            if(!producto) {
                throw new Error('invalid product id');
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
            const response = await Producto.destroy({
                where: { id_producto: id }
            });
            if(response == 1) {
                res.send({ status: true, message: "product has been deleted" });
            }
            else {
                res.send({ status: false, message: "product has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting product ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const numProducts = await Producto.destroy({
            where: {},
            truncate: false
        });
        res.send({
            status: true,
            message: `${numProducts} products has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting products"
        })
    }
};