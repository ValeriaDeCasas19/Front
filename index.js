const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');


//configuracion engine
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRoutes = require('./routes/index.js');
app.use('/',indexRoutes);


const request = require('request');



request('https://tierra-api.vercel.app/ver', function(error, response, body){
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});



app.listen(app.get('port'), ()=>{
    console.log('Servidor funcionando en el puerto',app.get('port'))
});