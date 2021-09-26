const db = require('../models')
const Clientes = db.clientes

exports.crear = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            messege: "El nombre es obligatorio"
        })
        return
    }

    if (!req.body.apellidos) {
        res.status(400).send({
            messege: "Los apellidos es obligatorio"
        })
        return
    }

    if (!req.body.fechaNacimiento) {
        res.status(400).send({
            messege: "La fecha de nacimiento es obligatoria"
        })
        return
    }

    const cliente = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        fechaNacimiento: req.body.fechaNacimiento
    }

    Clientes.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Hubo un error mientras se registraba el cliente."
            });
        });
};

exports.listar = (req, res) => {
    Clientes.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Hubo un error mientras se listaban los clientes."
            });
        });
};

exports.promedio = (req, res) => {
    Clientes.findAll({
            attributes: ['fechaNacimiento'],
            raw: true,
            nest: true,
        })
        .then(data => {
            var sumaEdad = 0;
            let promedioEdad = 0;
            data.forEach(element => {
                var yearCliente = new Date(element.fechaNacimiento);
                var yearNow = new Date();
                var edadCliente = yearNow.getFullYear() - yearCliente.getFullYear()
                sumaEdad += edadCliente
            });
            promedioEdad = (sumaEdad / data.length)
            res.status(200).json({
                promedioEdad
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Hubo un error mientras se promediaba la edad de los clientes."
            });
        });
};