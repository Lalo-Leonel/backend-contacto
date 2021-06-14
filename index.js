const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());



app.post("/api/sendEmail", (req, res)=>{
    console.log(req);
})

app.listen(5000, ()=>{
    console.log("Servidor corriendo en el puerto 5000");
})