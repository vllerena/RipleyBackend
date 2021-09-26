const express = require('express');
const cors = require('cors');
const db = require('./models');
const app = express();

var corsConfig = {
    origin: 'http://localhost:9091'
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();
// NOTA: Si se desea limpiar la tabla e iniciarla con cambios puede descomentar las siguientes lineas
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Tablas eliminadas, migraciones ejecutadas nuevamente.");
// });

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a Ripley API'
    });
})

require('./routes/clientesRoutes')(app);

app.set('appName', 'Ripley Backend');
app.set('port', process.env.PORT || 9090);

app.listen(app.get('port'), () => {
    console.log('El servidor está activo en el puerto', app.get('port'))
})