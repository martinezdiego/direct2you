const { body, param, validationResult } = require('express-validator');

const { UbicacionUsuario, Usuario, Ubicacion } = require('../models');


exports.create = [
    body("fk_id_usuario")
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Usuario.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    body("fk_id_ubicacion")
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Ubicacion.findByPk(value);
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
            fk_id_usuario: body.fk_id_usuario,
            fk_id_ubicacion: body.fk_id_ubicacion
        };
        
        try {
            const response = await UbicacionUsuario.create(data);
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
        const response = await UbicacionUsuario.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving entries."
        });
    }
};

exports.findAllOfUser = [
    param("id")
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Usuario.findByPk(value);
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
            const response = await UbicacionUsuario.findAll({
                where: { fk_id_usuario : id }
            });
            res.send(response);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when retreaving entries of user ${id}.`
            });
        }
    }
];

exports.deleteOneOfUser = [
    param("userId")
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Usuario.findByPk(value);
            if (!response) {
                throw new Error('invalid id');
            }
        }),
    param("ubicationId")
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Ubicacion.findByPk(value);
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
        
        const { userId, ubicationId } = req.params;
            
        try {
            const response = await UbicacionUsuario.destroy({
                where: { 
                    fk_id_usuario : userId,
                    fk_id_ubicacion: ubicationId
                }
            });
            if (response == 1) {
                res.send({ status: true, message: "ubication has been deleted from user" });
            }
            else {
                res.send({ status: false, message: "ubication has not been deleted from user" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entry of user ${userId} and ubication ${ubicationId}.`
            });
        }
    }
];

exports.deleteAllOfUser = [
    param("id")
        .exists()
        .withMessage('must be specified')
        .trim()
        .custom(async (value) => {
            const response = await Usuario.findByPk(value);
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
            const response = await UbicacionUsuario.destroy({
                where: { 
                    fk_id_usuario : id,
                }
            });
            res.send({
                status: true,
                message: `${response} entries has been deleted`
            });
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entry of user ${userId} and ubication ${ubicationId}.`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await UbicacionUsuario.destroy({
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
