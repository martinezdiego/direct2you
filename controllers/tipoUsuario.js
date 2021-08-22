const { body, param, validationResult } = require('express-validator');

const { TipoUsuario } = require('../models');

exports.create = [
    body('nombre_tipo_usuario')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('must have only letters')
        .custom(async (value) => {
            const response = await TipoUsuario.findOne({ where: { nombre_tipo_usuario: value }});
            if (response) {
                throw new Error("user type already exists");
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
            nombre_tipo_usuario: body.nombre_tipo_usuario.toLowerCase()
        };

        try {
            const response = await TipoUsuario.create(data);
            res.send(response);
        }
        catch(err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating user type."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const response = await TipoUsuario.findAll();
        res.send(response);
    }
    catch(err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retrieving user types."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await TipoUsuario.findByPk(value);
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
            const response = await TipoUsuario.findByPk(id);
            res.send(response);
        }
        catch(err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retrieving user type ${id}`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const response = await TipoUsuario.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
            return true;
        }),
    body('nombre_tipo_usuario')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('must have only letters')
        .custom(async (value) => {
            const response = await TipoUsuario.findOne({ where: { nombre_tipo_usuario: value } });
            if (response) {
                throw new Error("user type already exists");
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
        const { body } = req;

        const data = {
            nombre_tipo_usuario: body.nombre_tipo_usuario.toLowerCase()
        };

        try {
            const tipoUsuario = await TipoUsuario.findByPk(id);
            
            tipoUsuario.nombre_tipo_usuario = data.nombre_tipo_usuario;
            
            await tipoUsuario.save();
            
            res.send(tipoUsuario);
        }
        catch(err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating user type ${id}.`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const response = await TipoUsuario.findByPk(value);
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
            const response = await TipoUsuario.destroy({
                where : { id_tipo_usuario : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "user type has been deleted" });
            }
            else {
                res.send({ status: false, message: "user type has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting user type ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await TipoUsuario.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${response} users has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting users"
        })
    }
};
