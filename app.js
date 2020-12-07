var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbMongo=require('./config/db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cursoRouter = require('./routes/curso');
var inscripcionesRouter = require('./routes/inscripciones');
var estudiantesRouter = require('./routes/estudiantes');
var equipoRouter=require('./routes/equipo');
var esportRouter=require('./routes/esport');
var jugadorRouter=require('./routes/jugador');
var plazaRouter=require('./routes/plaza');
var bodyParser=require('body-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
dbMongo();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/estudiantes', estudiantesRouter);
app.use('/curso', cursoRouter);
app.use('/inscripciones', inscripcionesRouter);
app.use('/equipo',equipoRouter);
app.use('/esport',esportRouter);
app.use('/jugador',jugadorRouter);
app.use('/plaza',plazaRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
