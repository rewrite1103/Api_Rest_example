// Description: Archivo principal de la aplicación

//se importan los modulos necesarios
const app = require('./server');

//el servidor escucha en el puerto 3000 y muestra un mensaje en la consola
app.listen(app.get('port'), () => {
    console.log('Server listening on port ', app.get('port'));
  
  });