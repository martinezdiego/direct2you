const db = require('../models');

const Usuario = db.usuario;

exports.create = (req, res) => {
    const { body } = req;

    const usuario = {
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

    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Usuario."
            });
        });
};

exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Usuarios."
            });
        });
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};