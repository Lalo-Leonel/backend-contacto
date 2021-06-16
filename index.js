const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
//const { sendEmail } = require('./mail');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(cookieParser());

//app.use(require('./routes/index'));

// app.post("/api/sendEmail", (req, res)=>{
//     console.log(req.body);

//     //sendEmail(req.body.email, req.body.nombre, "Hello");
// })

app.post("/api/sendEmail", async (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body.datos;
    
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${nombre}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${asunto}</li>
        </ul>
        <p>${mensaje}</p>
    `;

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'osbaldo.spinka37@ethereal.email',
    //         pass: 'g4UbxUw8fnJdexbdHY'
    //     }
    // });
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: '2021p.prueba@gmail.com',
            pass: 'prueba.123'
        }
    });

    // let info = await transporter.sendMail({
    //     from: '<osbaldo.spinka37@ethereal.email>', // sender address,
    //     to: email,
    //     subject: asunto,
    //     //text: 'Hello World'
    //     html: contentHTML
    // })

    let info = await transporter.sendMail({
        from: '<2021p.prueba@gmail.com>', // sender address,
        to: email,
        subject: asunto,
        //text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    //res.redirect('/success.html');
    res.send("recibido");
});


app.listen(5000, ()=>{
    console.log("Servidor corriendo en el puerto 5000");
})