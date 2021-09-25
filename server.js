const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const app = express();
app.set('port', process.env.PORT || 9090)
const config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'ripleyBackend'
}

app.use(myconn(mysql, config, 'single'))

app.get('/', (req, res) => {
    res.send('Bienvenido a Ripley API')
})

app.listen(app.get('port'), () => {
    console.log('El servidor está activo en el puerto', app.get('port'))
})