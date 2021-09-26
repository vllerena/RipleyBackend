const express = require('express');
const routes = express.Router();

routes.get('/clientes', (req, res) => {
    res.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM ')
    })
})

module.exports = routes