const mailer = require('nodemailer');

const getEmailData = (to, name, template) =>{
    let data = null;

    switch(template){
        case 'hello':
            data = {
                from: "Leo",
                to,
                subject: `Hello ${name}`,
                html: Hello() 
            }
            break;
        case 'thanks':
                data = {
                    from: "Leo",
                    to,
                    subject: `Hello ${name}`,
                    html: Hello() 
                }
            break;
        default:
            data;
    }
    return data;
}

const sendEmail = (to, name, type) =>{
    const smtpTransporter = mailer.createTransport({
        service: "Gmail",
        auth:{
            user: "jaewon@gmail.com",
            pass: "12345"
        }
    })

    const mail = getEmailData(to, name, type);

    smtpTransporter.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent successfully")
        }
        smtpTransporter.close();
    })
}

module.exports = {sendEmail};