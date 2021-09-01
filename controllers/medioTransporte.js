const { body, param, validationResult } = require('express-validator');

const { MedioTransporte } = require('../models');

exports.create = [
    body('num_placa')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 45 })
        .withMessage('must have length more than 0 and less than 46')
        .custom(async (value) => {
            const medioTransporte = await MedioTransporte.findOne({ where: { num_placa: value } });
            if (medioTransporte) {
                throw new Error('license plate number already in use');
            }
            return true;
        }),        
    body('estado_medio_transporte')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 and less than 16'),
    body('fk_id_tipo_medio_transporte')
        .exists()
        .withMessage('must be specified'),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { body } = req;

        const data = {            
            num_placa: body.num_placa,
            estado_medio_transporte: body.estado_medio_transporte,
            fk_id_tipo_medio_transporte: body.fk_id_tipo_medio_transporte
        };

        try {
            const medioTransporte = await MedioTransporte.create(data);
            res.send(medioTransporte); 
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating transport."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const mediosTransporte = await MedioTransporte.findAll();
        res.send(mediosTransporte);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when fetching transport units."
        });
    }
};

exports.findOne = [
    param('id_medio_transporte')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const medioTransporte = await MedioTransporte.findByPk(value);
            if(medioTransporte === null) {
                throw new Error('invalid transport id');
            }
            return true;
        }),
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { id_medio_transporte } = req.params;
        try {
            const medioTransporte = await MedioTransporte.findByPk(id_medio_transporte);
            res.send(medioTransporte);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when fetching user ${id_medio_transporte}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .custom(async (value) => {
            const medioTransporte = await MedioTransporte.findByPk(value);
            if(!medioTransporte) {
                throw new Error('invalid transport unit id');
            }
            return true;
        }),
    body('num_placa')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 45 })
        .withMessage('must have length more than 0 and less than 46'),             
    body('estado_medio_transporte')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 15 })
        .withMessage('must have length more than 0 and less than 16'),
    body('fk_id_tipo_medio_transporte')
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
            const medioTransporte = await MedioTransporte.findByPk(id);

            medioTransporte.num_placa = data.num_placa;
            medioTransporte.estado_medio_transporte = data.estado_medio_transporte;
            medioTransporte.fk_id_tipo_medio_transporte = data.fk_id_tipo_medio_transporte;

            await medioTransporte.save();

            res.send(medioTransporte);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating transport unit ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const medioTransporte = await MedioTransporte.findByPk(value);
            if(!medioTransporte) {
                throw new Error('invalid transport unit id');
            }
            return true;
        }),
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { id } = req.params;
        try {
            const response = await MedioTransporte.destroy({
                where: { id_medio_transporte: id }
            });
            if (response == 1) {
                res.send({ status: true, message: "transport unit has been deleted" });
            }
            else {
                res.send({ status: false, message: "transport unit has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting transport unit ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const numUnidades = await MedioTransporte.destroy({
            where: {},
            truncate: false
        });
        res.send({
            status: true,
            message: `${numUnidades} transport units has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting transport units"
        })
    }
};