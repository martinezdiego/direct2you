const db = require('../models');

const Usuario = db.usuario;

exports.create = async (req, res) => {
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
            message: err.message || "Ocurrio un error al crear Usuario."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.send(usuarios);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrio un error al obtener Usuarios."
        });
    }
};

exports.findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        res.send(usuario);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `Ocurrio un error al obtener usuario con id ${id}`
        });
    }
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
