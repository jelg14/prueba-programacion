const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { query } = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

//crear conexion a mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carrosdb'
});

// comprobando si hay conexion a la base de datos
connection.connect(err => {
    if (err) {
        console.log(err);
    } else { console.log('conexion a la base de datos realizada con exito !!!'); }

})

//rutas
app.get('/', (req, res) => {
    res.send('Registro de Autos');
})

//crud
app.get('/autosRegistrados', (req, res) => {
    const sql = 'SELECT * FROM carros';
    connection.query(sql, (err, resultado) => {
        if (err) console.log(err);
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.send('No hay ningun resultado');
        }
    });
});

app.get('/datosDelAuto/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM carros WHERE id_carro = ${id}`;
    connection.query(sql, (err, resultado) => {
        if (err) console.log(err);
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.send('No hay ningun resultado');
        }
    });
});

app.post('/agregarAuto', (req, res) => {
    const datosAuto = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.año,
        placa: req.body.placa,
        estado: req.body.estado.toLowerCase()
    }
    if (datosAuto.marca != "" && datosAuto.modelo != "" &&
        datosAuto.año != 0 && datosAuto.placa != "" && datosAuto.estado != "") {
        if (datosAuto.estado == "perfecto" || datosAuto.estado == "daño menor" ||
            datosAuto.estado == "reparacion urgente" || datosAuto.estado == "en reparacion" ||
            datosAuto.estado == "descarte") {
            const sql = 'INSERT INTO carros SET ?';
            connection.query(sql, datosAuto, err => {
                if (err) console.log(err);
                res.send('Registro de auto exitoso');
            });
        } else res.send("Para estado solo puede usar las sig. palabras: perfecto, daño menor, reparacion urgente, en reparacion, descarte")
    } else {
        res.send('no puede ingresar datos vacios');
    }

})

app.put('/editarAuto/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, año, placa, estado } = req.body;
    if (req.body.marca != null && req.body.modelo != null &&
        req.body.año != null && req.body.placa != null &&
        req.body.estado != null) {
        const sql = `UPDATE carros SET marca= '${marca}', modelo= '${modelo}'
        , año= ${año}, placa= '${placa}', estado= '${estado}' where id_carro = ${id}`;

        connection.query(sql, (err, resultado) => {
            if (err) console.log(err);

            res.send('El auto ha sido modificado');
        });
    } else {
        res.send("no puede ingresar ningun dato vacio");
    }
})

app.delete('/eliminarAuto/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM carros WHERE id_carro = ${id}`;
    connection.query(sql, (err) => {
        if (err) console.log(err);
        res.send('El dato ha sido eliminado');
    })
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});