const { body, param, validationResult } = require('express-validator');

const { Reclamo } = require('../models');

exports.create = [
    body('fecha_reclamo')
        .exists()
        .withMessage('must be specified'),               
    body('descripcion_reclamo')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256'),
    body('estado_reclamo')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 or less than 16'),        
    body('fk_id_usuario')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_pedido')
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
            fecha_reclamo: body.fecha_reclamo,
            descripcion_reclamo: body.descripcion_reclamo,
            estado_reclamo: body.estado_reclamo,
            fk_id_usuario: body.fk_id_usuario,
            fk_id_pedido: body.fk_id_pedido
        };

        try {
            const reclamo = await Reclamo.create(data);
            res.send(reclamo);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating claim."
            });
        }
    }       
];

exports.findAll = async (req, res) => {
    try {
        const reclamos = await Reclamo.findAll();
        res.send(reclamos);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when fetching claims."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const reclamo = await Reclamo.findByPk(value);
            if (reclamo === null){
                throw new Error('invalid claim id');
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
            const reclamo = await Reclamo.findByPk(id);
            res.send(reclamo);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when fetching claim ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .custom(async (value) => {
            const reclamo = await Reclamo.findByPk(value);
            if (!reclamo) {
                throw new Error('invalid claim id');
            }
            return true;
        }),
    body('fecha_reclamo')
        .exists()
        .withMessage('must be specified'),               
    body('descripcion_reclamo')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256'),
    body('estado_reclamo')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 or less than 16'),        
    body('fk_id_usuario')
        .exists()
        .withMessage('must be specified'),
    body('fk_id_pedido')
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
            const reclamo = await Reclamo.findByPk(id);

            reclamo.fecha_reclamo = data.fecha_reclamo,
            reclamo.descripcion_reclamo = data.descripcion_reclamo,
            reclamo.estado_reclamo = data.estado_reclamo,
            reclamo.fk_id_usuario = data.fk_id_usuario,
            reclamo.fk_id_pedido = data.fk_id_pedido        

            await reclamo.save();

            res.send(reclamo);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating claim ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const reclamo = await Reclamo.findByPk(value);
            if(!reclamo) {
                throw new Error('invalid claim id');
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
            const response = await Reclamo.destroy({
                where: { id_reclamo: id }
            });
            if(response == 1) {
                res.send({ status: true, message: "claim has been deleted" });
            }
            else {
                res.send({ status: false, message: "claim has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting claim ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const numClaims = await Reclamo.destroy({
            where: {},
            truncate: false
        });
        res.send({
            status: true,
            message: `${numClaims} claims has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting claims"
        })
    }
};