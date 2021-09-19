const { body, param, validationResult } = require('express-validator');

const { MetodoDePagoEmpresa, Empresa, MetodoPago } = require('../models');


exports.create = [
//     body("fk_id_usuario")
//     .exists()
//     .withMessage("must be specified")
//     .custom(async (value) => {
//         const response = await Usuario.findByPk(value);
//         if (!response) {
//             throw new Error('invalid id');
//         }
//     }),
//     body("fk_id_ubicacion")
//     .exists()
//     .withMessage("must be specified")
//     .custom(async (value) => {
//         const response = await Ubicacion.findByPk(value);
//         if (!response) {
//             throw new Error('invalid id');
//         }
//     }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        
        const { body } = req;

        const data = {
            datos_pago_empresa: body.datos_pago_empresa,
            descripcion: body.descripcion,
            fk_id_empresa: body.fk_id_empresa,
            fk_id_metodo_de_pago: body.fk_id_metodo_de_pago
        };
        
        try {
            const response = await MetodoDePagoEmpresa.create(data);
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
        const response = await MetodoDePagoEmpresa.findAll();
        res.send(response);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when retreaving entries."
        });
    }
};

exports.findAllOfCompany = [
//     param("id")
//     .exists()
//     .withMessage("must be specified")
//     .custom(async (value) => {
//         const response = await Usuario.findByPk(value);
//         if (!response) {
//             throw new Error('invalid id');
//         }
//     }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { id } = req.params;
            
        try {
            const response = await MetodoDePagoEmpresa.findAll({
                where: { fk_id_empresa : id }
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
//     param("userId")
//     .exists()
//     .withMessage("must be specified")
//     .custom(async (value) => {
//         const response = await Usuario.findByPk(value);
//         if (!response) {
//             throw new Error('invalid id');
//         }
//     }),
//     param("ubicationId")
//     .exists()
//     .withMessage("must be specified")
//     .custom(async (value) => {
//         const response = await Ubicacion.findByPk(value);
//         if (!response) {
//             throw new Error('invalid id');
//         }
//     }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { companyId, paymentMethodId } = req.params;
            
        try {
            const response = await MetodoDePagoEmpresa.destroy({
                where: { 
                    fk_id_empresa : companyId,
                    fk_id_metodo_de_pago: paymentMethodId
                }
            });
            if (response == 1) {
                res.send({ status: true, message: "payment method has been deleted from company" });
            }
            else {
                res.send({ status: false, message: "payment method has not been deleted from company" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entry of company ${companyId} and payment method ${paymentMethodId}.`
            });
        }
    }
];

exports.deleteAllOfCompany = [
//     param("id")
//     .exists()
//     .withMessage("must be specified")
//     .custom(async (value) => {
//         const response = await Usuario.findByPk(value);
//         if (!response) {
//             throw new Error('invalid id');
//         }
//     }),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { id } = req.params;
            
        try {
            const response = await MetodoDePagoEmpresa.destroy({
                where: { 
                    fk_id_empresa : id,
                }
            });
            res.send({
                status: true,
                message: `${response} entries has been deleted`
            });
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting entries of company ${companyId}.`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const response = await MetodoDePagoEmpresa.destroy({
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
