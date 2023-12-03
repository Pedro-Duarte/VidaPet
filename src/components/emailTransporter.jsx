// Importe as dependências necessárias
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true }); // Adicione o pacote CORS para lidar com solicitações de origens diferentes

// Configure o transporte de e-mail usando o nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pedro.duartejunior@gmail.com', // Substitua pelo seu endereço de e-mail
    pass: 'PPmma080428205', // Substitua pela sua senha de e-mail
  },
});

// Defina a função do Firebase Cloud Functions para enviar e-mails
exports.enviarEmail = functions.https.onRequest((req, res) => {
  // Permita solicitações CORS
  cors(req, res, () => {
    // Recupere os dados do formulário do corpo da solicitação
    const { name, email, subject, message } = req.body;

    // Configure as opções do e-mail
    const mailOptions = {
      email, // Substitua pelo seu endereço de e-mail
      to: 'destinatario@gmail.com', // Substitua pelo endereço de e-mail do destinatário
      subject: subject,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    // Envie o e-mail usando o transporte configurado
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        // Se ocorrer um erro, retorne um status de erro com a mensagem de erro
        return res.status(500).send(error.toString());
      }
      // Se for bem-sucedido, retorne um status de sucesso com uma mensagem
      return res.status(200).send('E-mail enviado com sucesso!');
    });
  });
});
