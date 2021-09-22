const { body, param, validationResult } = require('express-validator');

const { CategoriaProducto } = require('../models');

exports.create = [
    body('nombre_categoria_producto')
        .exists()
        .withMessage('must be specified')
        .trim()
        .isLength({ min: 1, max: 45 })
        .withMessage('must have length more than 0 and less than 46')
        .matches(/^[a-zA-z ]+$/)
        .withMessage('must have only letters and blank spaces')
        .custom(async (value) => {
            const response = await CategoriaProducto.findOne({ where: { nombre_categoria_producto: value } });
            if (response) {
                throw new Error('product category already exists');
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
            nombre_categoria_producto: body.nombre_categoria_producto
        };

        try {
            const response = await CategoriaProducto.create(data);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating product category."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await CategoriaProducto.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving product categories."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await CategoriaProducto.findByPk(value);
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
            const response = await CategoriaProducto.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving product category ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await CategoriaProducto.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    body('nombre_categoria_producto')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 45 })
        .withMessage('must have length more than 0 and less than 46')
        .matches(/^[a-zA-z ]+$/)
        .withMessage('must have only letters and blank spaces')
        .custom(async (value) => {
            const response = await CategoriaProducto.findOne({ where: { nombre_categoria_producto: value } });
            if (response) {
                throw new Error('product category already exists');
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
            const categoria = await CategoriaProducto.findByPk(id);
            
            categoria.nombre_categoria_producto = data.nombre_categoria_producto;
            
            await categoria.save();
            
            res.send(categoria);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating product category ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await CategoriaProducto.findByPk(value);
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
            const response = await CategoriaProducto.destroy({
                where : { id_categoria_producto : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "product category has been deleted" });
            }
            else {
                res.send({ status: false, message: "product category has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting product category ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await CategoriaProducto.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} product categories has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting product categories"
        })
    }
};