var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
//db('mongodb+srv://renato:Descarte23@cluster0.rezfw.gcp.mongodb.net/agora_vai?retryWrites=true&w=majority')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Criação de uma nova rota
const teste = require('./routes/teste')
app.use('/teste',teste)

module.exports = app;
