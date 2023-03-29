/*Descripción: Archivo principal del servidor,
aqui se establecen las configuraciones del servidor*/

//se importan los modulos necesarios
const server = require('express');
const morgan = require('morgan');
const app = server();


//settings, aqui se establecen las configuraciones del servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


/*middlewares, son subconjunto de funciones encadenadas llamadas 
por la capa de enrutamiento Express js antes de invocar el 
controlador definido por el usuario*/
app.use(server.json());
app.use(server.urlencoded({extended: false}));
app.use(morgan('dev'));


//routes, aqui se establecen las rutas del servidor
app.use(require('./routes/rutas.routes'));

//se exporta el modulo, para poder ser usado en otros archivos
module.exports = app;