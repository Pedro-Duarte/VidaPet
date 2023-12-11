import validator from 'validator';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const validarDados = (name, email, subject, message) => {
  const erros = {};

  if (!name || name.trim() === '') {
    erros.name = 'Campo Nome é obrigatório.';
  }

  if (!email || !validator.isEmail(email)) {
    erros.email = 'E-mail inválido.';
  }

  if (!name || subject.trim() === '') {
    erros.subject = 'Campo Assunto é obrigatório.';
  }

  if (!name || message.trim() === '') {
    erros.message = 'Campo Mensagem é obrigatório.';
  }

  return erros;
};

app.post('/enviar', (req, res) => {
  const { name, email, subject, message } = req.body;
  const erros = validarDados(name, email, subject, message);

  if (Object.keys(erros).length === 0) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASS}`,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: `${process.env.GMAIL_USER}`,
      subject: `${subject}`,
      text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ success: false, error: 'Erro ao enviar e-mail' });
      } else {
        console.log('E-mail enviado:', info.response);
        res.json({ success: true, message: 'E-mail enviado com sucesso' });
      }
    });
  } else {
    res.status(400).json({ success: false, erros });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
