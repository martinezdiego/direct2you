const { body, param, validationResult } = require('express-validator');
const passport = require('passport');

const { Usuario } = require('../models');

const auth = require('../util/authentication');

exports.create = [
    body('nombre_usuario')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z]+ ?[a-zA-Z]+$/)
        .withMessage('must have only letters and could use a blank space as separator of two names'),
    body('apellido')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256')
        .matches(/^[a-zA-Z]+ ?[a-zA-Z]+$/)
        .withMessage('must have only letters and could use a blank space as separator of two names'),
    body('correo_usuario')
        .exists()
        .withMessage('must be specified')
        .isEmail()
        .withMessage('must be a valid email address')
        .custom(async (value) => {
            const usuario = await Usuario.findOne({ where: { correo_usuario: value } });
            if (usuario) {
                throw new Error('e-mail already in use');
            }
            return true;
        }),
    body('contrasena')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .withMessage('must have at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and 1 special character'),
    body('num_telefono_usuario')
        .exists()
        .withMessage('must be specified')
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        .withMessage('must be a valid phone number')
        .custom(async (value) => {
            const usuario = await Usuario.findOne({ where: { num_telefono_usuario: value } });
            if (usuario) {
                throw new Error('phone number already in use');
            }
            return true;
        }),
    body('num_cedula')
        .exists()
        .withMessage('must be specified')
        .matches(/^[V|E|J|G]-?[0-9]{8}-?[0-9]?/)
        .withMessage('must have a prefix of V,E,J,G followed by a cedula number or a rif number')
        .custom(async (value) => {
            const usuario = await Usuario.findOne({ where: { num_cedula: value } });
            if (usuario) {
                throw new Error('cedula or rif already in use');
            }
            return true;
        }),
    body('estado_usuario')
        .exists()
        .withMessage('must be specified')
        .isIn(['habilitado', 'deshabilitado'])
        .withMessage('must be a valid type'),
    body('url_imagen_usuario')
        .exists()
        .withMessage('must be specified'),
    body('fk_tipo_usuario')
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
            nombre_usuario: body.nombre_usuario,
            apellido: body.apellido,
            correo_usuario: body.correo_usuario,
            contrasena: body.contrasena,
            num_telefono_usuario: body.num_telefono_usuario,
            num_cedula: body.num_cedula,
            estado_usuario: body.estado_usuario,
            url_imagen_usuario: body.url_imagen_usuario,
            fk_tipo_usuario: body.fk_tipo_usuario
        };
        
        try {
            const usuario = await Usuario.create(data);
            res.send(usuario);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || "unexpected error has been occurred when creating user."
            });
        }
    }
];

exports.findAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.send(usuarios);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "unexpected error has been occurred when fetching users."
        });
    }
};

exports.findOne = [
    param('id')
        .exists()
        .withMessage('must be specified')
        .custom(async (value) => {
            const usuario = await Usuario.findByPk(value);
            if (usuario === null) {
                throw new Error('invalid user id');
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
            const usuario = await Usuario.findByPk(id);
            res.send(usuario);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when fetching user ${id}.`
            });
        }
    }
];

exports.update = [
    param('id')
        .exists()
        .custom(async (value) => {
            const usuario = await Usuario.findByPk(value);
            if (!usuario) {
                throw new Error('invalid user id');
            }
            return true;
        }),
    body('nombre_usuario')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 and less than 256')
        .matches(/^[a-zA-Z]+ ?[a-zA-Z]+$/)
        .withMessage('must have only letters and could use a blank space as separator of two names'),
    body('apellido')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 1, max: 255 })
        .withMessage('must have length more than 0 or less than 256')
        .matches(/^[a-zA-Z]+ ?[a-zA-Z]+$/)
        .withMessage('must have only letters and could use a blank space as separator of two names'),
    body('correo_usuario')
        .exists()
        .withMessage('must be specified')
        .isEmail()
        .withMessage('must be a valid email address')
        .custom(async (value) => {
            const usuario = await Usuario.findOne({ where: { correo_usuario: value } });
            if (usuario) {
                throw new Error('e-mail already in use');
            }
            return true;
        }),
    body('contrasena')
        .exists()
        .withMessage('must be specified')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .withMessage('must have at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and 1 special character'),
    body('num_telefono_usuario')
        .exists()
        .withMessage('must be specified')
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        .withMessage('must be a valid phone number')
        .custom(async (value) => {
            const usuario = await Usuario.findOne({ where: { num_telefono_usuario: value } });
            if (usuario) {
                throw new Error('phone number already in use');
            }
            return true;
        }),
    body('num_cedula')
        .exists()
        .withMessage('must be specified')
        .matches(/^[V|E|J|G]-?[0-9]{8}-?[0-9]?/)
        .withMessage('must have a prefix of V,E,J,G followed by a cedula number or a rif number')
        .custom(async (value) => {
            const usuario = await Usuario.findOne({ where: { num_cedula: value } });
            if (usuario) {
                throw new Error('cedula or rif already in use');
            }
            return true;
        }),
    body('estado_usuario')
        .exists()
        .withMessage('must be specified')
        .isIn(['habilitado', 'deshabilitado'])
        .withMessage('must be a valid type'),
    body('url_imagen_usuario')
        .exists()
        .withMessage('must be specified'),
    body('fk_tipo_usuario')
        .exists()
        .withMessage('must be specified'),
    async (req, res) => {
        const errors = validationResult(req); 

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        
        const { id } = req.params;
        const data  = req.body;
        
        try {
            const usuario = await Usuario.findByPk(id);
            
            usuario.nombre_usuario = data.nombre_usuario;
            usuario.apellido = data.apellido;
            usuario.correo_usuario = data.correo_usuario;
            usuario.contrasena = data.contrasena;
            usuario.num_telefono_usuario = data.num_telefono_usuario;
            usuario.num_cedula = data.num_cedula;
            usuario.estado_usuario = data.estado_usuario;
            usuario.url_imagen_usuario = data.url_imagen_usuario;
            usuario.fk_tipo_usuario = data.fk_tipo_usuario;
            
            await usuario.save();
            
            res.send(usuario);
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when updating user ${id}`
            });
        }
    }
];

exports.delete = [
    param('id')
        .exists()
        .custom(async (value) => {
            const usuario = await Usuario.findByPk(value);
            if (!usuario) {
                throw new Error('invalid user id');
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
            const response = await Usuario.destroy({
                where : { id_usuario : id }
            });
            if (response == 1) {
                res.send({ status: true, message: "user has been deleted" });
            }
            else {
                res.send({ status: false, message: "user has not been deleted" });
            }
        }
        catch (err) {
            res.status(500).send({
                message: err.message || `unexpected error has been occurred when deleting user ${id}`
            });
        }
    }
];

exports.deleteAll = async (req, res) => {
    try {
        const numUsers = await Usuario.destroy({
            where: {},
            truncate: false
        }); 
        res.send({
            status: true,
            message: `${numUsers} users has been deleted`
        })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            message: err.message || "unexpected error has been occurred when deleting users"
        })
    }
};

exports.login = [
    auth.isNotAuthenticated,
    (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) { 
                return next(err); 
            }
            if (!user) { 
                res.status(422).send({ 
                    status: false, 
                    message: info.message 
                });
                return;
            }
            req.logIn(user, (err) => {
                if (err) { 
                    return next(err); 
                    
                }
                res.status(200).send({ 
                    status: true, 
                    message: "user has been logged in" 
                });
            });
        })(req, res, next);
    }
];

exports.logout = [
    auth.isAuthenticated,
    (req, res) => {
        req.logOut();
        res.status(200).send({
            status: true,
            message: "user has been logged out"
        });
    }
];
