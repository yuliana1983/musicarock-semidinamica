
// importar el paquete de express, para el webserver
const express = require('express');
// inicializar la aplicación con el archivo app.js
const app = express();
// para activar el puerto
// const puerto = 7475;

// importar el paquete de dotenv
require('dotenv').config();
const puerto = process.env.PORT;

// para mostrar los archivos de la carpeta public, utiliza metodo use

app.use(express.static('public'));

// para crear las rutas de las páginas web, se utiliza el metodo get

app.get('/left-sidebar', (req, res) => {
    // res, para dar una repuesta de petición al usuario
    res.sendFile(__dirname + '/public/left-sidebar.html');
})
app.get('/no-sidebar', (req, res) => {
    // res, para dar una repuesta de petición al usuario
    res.sendFile(__dirname + '/public/no-sidebar.html');
})
app.get('/right-sidebar', (req, res) => {
    // res, para dar una repuesta de petición al usuario
    res.sendFile(__dirname + '/public/right-sidebar.html');
})
app.get('*', (req, res) => {
    // el comidin o *, en éste caso, si la pagina no existe, va a retornar 404.html 

    res.sendFile(__dirname + '/public/404.html');
})

// activar el puerto para el webserver con un listen, con una función de flecha
app.listen(puerto,()=>{
    // imprimir en la consola, si se activo con éxito el webserver
    console.log(`El webserver esta activo en el puerto ${puerto}`);


})


