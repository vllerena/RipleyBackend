module.exports = app => {
    const clientes = require('../controllers/clientesController')
    var router = require('express').Router()

    router.get('/clientes', clientes.listar);
    router.post('/clientes', clientes.crear);
    router.get('/promedio', clientes.promedio);

    app.use('/api/v1', router)
}