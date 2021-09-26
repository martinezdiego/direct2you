const { body, param, validationResult } = require('express-validator');

const { UsuarioOpcion, TipoUsuario, OpcionSistema } = require('../models');


exports.create = [
    body('fk_id_tipo_usuario')
    .exists()
    .withMessage('must be specified')
    .custom(async (value) => {
        const response = await TipoUsuario.findByPk(value);
        if (!response) {
            throw new Error('invalid id');
        }
    }),
    body('fk_id_opcion')
    .exists()
    .withMessage('must be specified')
    .custom(async (value) => {
        const response = await OpcionSistema.findByPk(value);
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
            fk_id_opcion: body.fk_id_opcion,
            fk_id_tipo_usuario: body.fk_id_tipo_usuario
        };
        
        try {
            const response = await UsuarioOpcion.create(data);
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
        const response = await UsuarioOpcion.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving entries."
        });
    }
};

exports.findAllOfUser = [
    param('id')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await TipoUsuario.findByPk(value);
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
            const response = await UsuarioOpcion.findAll({
                where: { fk_id_tipo_usuario : id }
            });
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving entries of user type ${id}.`
            });
        }
    }
];

exports.deleteOneOfUser = [
    param('userId')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await TipoUsuario.findByPk(value);
        if (!response) {
            throw new Error('invalid id');
        }
    }),
    param('optionId')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await OpcionSistema.findByPk(value);
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
        
        const { userId, optionId } = req.params;
            
        try {
            const response = await UsuarioOpcion.destroy({
                where: { 
                    fk_id_tipo_usuario : userId,
                    fk_id_opcion: optionId
                }
            });
            if (response == 1) {
                res.send({ status: true, message: "option has been deleted from user type" });
            }
            else {
                res.send({ status: false, message: "option has not been deleted from user type" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entry of user type ${userId} and option ${optionId}.`
            });
        }
    }
];

exports.deleteAllOfUser = [
    param('id')
    .exists()
    .withMessage('must_be_specified')
    .custom(async (value) => {
        const response = await TipoUsuario.findByPk(value);
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
            const response = await UsuarioOpcion.destroy({
                where: { 
                    fk_id_tipo_usuario : id,
                }
            });
            res.send({
                status: true,
                message: `${response} entries has been deleted`
            });
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entries of user type ${id}.`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await UsuarioOpcion.destroy({
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
