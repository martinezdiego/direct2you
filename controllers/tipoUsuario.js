const db = require('../models');

const TipoUsuario = db.tipoUsuario;

exports.create = (req, res) => {
    const { body } = req;

    const tipoUsuario = {
        nombre_tipo_usuario: body.nombre_tipo_usuario
    };

    TipoUsuario.create(tipoUsuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating TipoUsuario."
            });
        });
};

exports.findAll = (req, res) => {
    TipoUsuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving TipoUsuario."
            });
        });
};

exports.findOne = (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    
    TipoUsuario.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving TipoUsuario with id " + id
            });
        });
};