const express = require('express');

const app = express();

app.set('port', process.env.PORT || 9090)

app.get('/', (req, res) => {
    res.send('Bienvenido a Ripley API')
})

app.listen(app.get('port'), () => {
    console.log('El servidor está activo en el puerto', app.get('port'))
})