const express = require('express');
const app = express();
const bodyParser = require("body-parser")
app.use(express.json())

const server = app.use('/api/v1',(require('./src/routes/index')));

const PORT =3003 
let myserver = require( 'http' ).Server( server );
myserver.listen(PORT,()=>{
    console.log(`Starting Application on  ${PORT}`)

});

