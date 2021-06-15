const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const { sendEmail } = require('./mail');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(cookieParser());

app.use(require('./routes/index'));

// app.post("/api/sendEmail", (req, res)=>{
//     console.log(req.body);

//     //sendEmail(req.body.email, req.body.nombre, "Hello");
// })

app.listen(5000, ()=>{
    console.log("Servidor corriendo en el puerto 5000");
})