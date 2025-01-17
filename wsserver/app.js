// Caricare tutte le librerie necessarie alla nostra applicazione
const express = require('express');
const cors = require('cors');

// Caricare i router dell'applicazione
const initRouter = require('./init')
const loginRouter = require('./login')
const refreshRouter = require('./token')
const usersRouter = require('./users')

const config = require('./config');
const parseJSON = require('./parse-json');

// Creare la nostra applicazione
const app = express();

// Aggiungo moduli middleware da usare nel catenza di elaborazioni di express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(parseJSON);

// Impostiamo la nostra app in modo che sia in grado di inviare al client i file contenuti nella cartella public
app.use('', express.static('public'));
app.use('/init', initRouter);
app.use('/login', loginRouter);
app.use('/refresh', refreshRouter);
app.use('/users', usersRouter);

const server = app.listen(config.localPort, () => {
    console.log('Server in ascolto sulla porta ' + config.localPort + '...');
})