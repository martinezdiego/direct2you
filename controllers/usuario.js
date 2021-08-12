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

exports.update = async (req, res) => {
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
        
        await usuario.save();
        
        res.send(usuario);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `Ocurrio un error al actualizar usuario con id ${id}`
        });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Usuario.destroy({
            where : { id_usuario : id }
        });
        if (response == 1) {
            res.send({ status: true, message: "usuario fue eliminado" });
        }
        else {
            res.send({ status: false, message: "usuario no fue eliminado" });
        }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || `Ocurrio un error al eliminar usuario con id ${id}`
        });
    }
};

exports.deleteAll = (req, res) => {
  
};
