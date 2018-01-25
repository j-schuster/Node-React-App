const requireLogin = require('../middlewares/requireLogin');
const nodemailer = require('nodemailer');

module.exports = (app) => {

  app.get('/api/contactRoute', (req, res) => {
    res.send('HELLO FROM CONTACT ROUTE')
    
  })

  app.post('/api/contact', (req, res) => {
    // email is from person responding
    const { email, experience, motivation, createdByEmail, createdByName, candidateName } = req.body.data;
    console.log(candidateName)
    const output = `
    <div>
      <h4>Dear ${createdByName}</h4>
        <p>You have received interested in a job from the Alt-Truist app!</p>
        <p>Below is more information about the candidate, feel free to get in touch through the email provided. If you have any questions about moving forward, please contact us a jschuster.dev@gmail.com</p>
        <hr>
        <h4>Name:</h4> 
        <p>${candidateName}</p>
        <h4>Motivation for applying:</h4>
        <p>${motivation}</p>
        <h4>Contact Info</h4>
        <p>${email}</p>
    </div>

      
    `;

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jschuster.dev@gmail.com', // generated ethereal user
            pass: '123Bloemfontein'  // generated ethereal password
        },
    });

   
    let mailOptions = {
        from: '"Johann Schuster 👻" <jschuster.dev@gmail.com>', // sender address
        to: createdByEmail, //the user that created the post, // list of receivers
        subject: 'Contact Request from Truist', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send('THANKS!!')
       
    })
  })  
   
};

