const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post("/api/sendEmail", async (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;
    console.log(req.body);
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${nombre}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${asunto}</li>
        </ul>
        <p>${mensaje}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'osbaldo.spinka37@ethereal.email',
            pass: 'g4UbxUw8fnJdexbdHY'
        }
    });

    let info = await transporter.sendMail({
        from: '"FaztTech Server" <osbaldo.spinka37@ethereal.email>', // sender address,
        to: 'laloleonelm@gmail.com',
        subject: 'Website Contact Form',
        text: 'Hello World'
        //html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    //res.redirect('/success.html');
    res.send("recibido");
});

module.exports = router;