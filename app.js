var nodemailer = require('nodemailer');

// infos
var courrielExpediteur = "andee847@gmail.com";
var password = "PASSWORD";
var courrielDestinataire = "andee.k@hotmail.com";
var sujetCourriel = "Hello World From GMAIL";
var contenuCourriel = "Contenu1515";
var intervalle = 20000;

// fonction pour envoyer un courriel
const sendEmail = (user, password, receiver, sujetCourriel, emailContent, serviceEnvoi) => {
  console.log("- sending")
  var transporter = nodemailer.createTransport({
    service: serviceEnvoi,
    auth: {
      user: user,
      pass: password
    }
  });
  
  var mailOptions = {
    from: user.replace(/(\S+)@(\w+)\.com/, '$1'),
    to: receiver,
    subject: sujetCourriel,
    text: emailContent
  };

  transporter.sendMail(mailOptions, (error, info) => 
    error ? console.log(error) : console.log('--> Email sent to ' + courrielDestinataire )
  );
};

// premier envoi
sendEmail(courrielExpediteur, password, courrielDestinataire, sujetCourriel, contenuCourriel, courrielExpediteur.replace(/(\S+)@(\w+)\.com/, '$2'));

// envois suivants
setInterval(()=>sendEmail(courrielExpediteur, password, courrielDestinataire, sujetCourriel, contenuCourriel, courrielExpediteur.replace(/(\S+)@(\w+)\.com/, '$2')), intervalle);
