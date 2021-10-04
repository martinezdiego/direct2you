const { body, param, validationResult } = require('express-validator');

const { ProductoEmpresa, Empresa, Producto } = require('../models');


exports.create = [
    body('fk_id_empresa')
    .exists()
    .withMessage('must be specified')
    .custom(async (value) => {
        const response = await Empresa.findByPk(value);
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
            empresa_id_empresa: body.fk_id_empresa,
            producto_id_producto: body.fk_id_producto
        };
        
        try {
            const response = await ProductoEmpresa.create(data);
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
        const response = await ProductoEmpresa.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving entries."
        });
    }
};

exports.findAllOfCompany = [
    param('id')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Empresa.findByPk(value);
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
            const response = await ProductoEmpresa.findAll({
                where: { empresa_id_empresa : id }
            });
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving entries of company ${id}.`
            });
        }
    }
];

exports.deleteOneOfCompany = [
    param('companyId')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Empresa.findByPk(value);
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
        
        const { companyId, productId } = req.params;
            
        try {
            const response = await ProductoEmpresa.destroy({
                where: { 
                    empresa_id_empresa : companyId,
                    producto_id_producto: productId
                }
            });
            if (response == 1) {
                res.send({ status: true, message: "product has been deleted from company" });
            }
            else {
                res.send({ status: false, message: "product has not been deleted from company" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entry of company ${companyId} and product ${productId}.`
            });
        }
    }
];

exports.deleteAllOfCompany = [
    param('id')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await Empresa.findByPk(value);
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
            const response = await ProductoEmpresa.destroy({
                where: { 
                    empresa_id_empresa : id,
                }
            });
            res.send({
                status: true,
                message: `${response} entries has been deleted`
            });
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entries of company ${id}.`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await ProductoEmpresa.destroy({
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
