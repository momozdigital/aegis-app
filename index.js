const express = require('express');
const pdf = require('html-pdf');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const pdfTemplate = require('./documents');
const pdfTemplate2 = require('./documents/generador.js');
const pdfTemplate3 = require('./documents/declaracionJurada.js');
const pdfTemplate4 = require('./documents/DeclaPropRes.js');
const pdfTemplate5 = require('./documents/fichaIdent.js');
const pdfTemplate6 = require('./documents/formularioDiag');

// crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use(express.json());

// rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );


// AEGIS START

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });    
});

app.post('/create-pdf2', (req, res) => {
    pdf.create(pdfTemplate2(req.body), {}).toFile('result2.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });    
});

app.post('/create-pdf3', (req, res) => {
    pdf.create(pdfTemplate3(req.body), {}).toFile('result3.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });    
});

app.post('/create-pdf4', (req, res) => {
    pdf.create(pdfTemplate4(req.body), {}).toFile('result4.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });    
});

app.post('/create-pdf5', (req, res) => {
    pdf.create(pdfTemplate5(req.body), {}).toFile('result5.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });    
});

app.post('/create-pdf6', (req, res) => {
    pdf.create(pdfTemplate6(req.body), {}).toFile('result6.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });    
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.get('/fetch-pdf2', (req, res) => {
    res.sendFile(`${__dirname}/result2.pdf`)
})

app.get('/fetch-pdf3', (req, res) => {
    res.sendFile(`${__dirname}/result3.pdf`)
})

app.get('/fetch-pdf4', (req, res) => {
    res.sendFile(`${__dirname}/result4.pdf`)
})

app.get('/fetch-pdf5', (req, res) => {
    res.sendFile(`${__dirname}/result5.pdf`)
})

app.get('/fetch-pdf6', (req, res) => {
    res.sendFile(`${__dirname}/result6.pdf`)
})

// AEGIS END

// escuchar peticiones
app.listen( process.env.PORT, () => console.log(`Listening on port ${ process.env.PORT }`));