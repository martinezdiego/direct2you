const { body, param, validationResult } = require('express-validator');

const { CategoriaEmpresa } = require('../models');

exports.create = [
    body('nombre_categoria_empresa')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-z ]+$/)
        .withMessage('must have only letters and blank spaces')
        .custom(async (value) => {
            const response = await CategoriaEmpresa.findOne({ where: { nombre_categoria_empresa : value }});
            if (response) {
                throw new Error('company category already exists');
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
            nombre_categoria_empresa: body.nombre_categoria_empresa,
        };
        
        try {
            const response = await CategoriaEmpresa.create(data);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating company category."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await CategoriaEmpresa.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving company categories."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await CategoriaEmpresa.findByPk(value);
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
            const response = await CategoriaEmpresa.findByPk(id);
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving company category ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await CategoriaEmpresa.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    body('nombre_categoria_empresa')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-z ]+$/)
        .withMessage('must have only letters and blank spaces')
        .custom(async (value) => {
            const response = await CategoriaEmpresa.findOne({ where: { nombre_categoria_empresa : value }});
            if (response) {
                throw new Error('company category already exists');
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
            const categoria = await CategoriaEmpresa.findByPk(id);
            
            categoria.nombre_categoria_empresa = data.nombre_categoria_empresa;
            
            await categoria.save();
            
            res.send(categoria);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating company category ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await CategoriaEmpresa.findByPk(value);
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
            const response = await CategoriaEmpresa.destroy({
                where : { id_categoria_empresa : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "company category has been deleted" });
            }
            else {
                res.send({ status: false, message: "company category has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting company category ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await CategoriaEmpresa.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} company categories has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting company categories"
        })
    }
};
