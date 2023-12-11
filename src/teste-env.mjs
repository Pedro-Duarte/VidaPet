// test-env.js
import dotenv from 'dotenv';

console.log('Conteúdo do arquivo .env:');
console.log('--------------------------');
console.log(`USUÁRIO:${process.env.GMAIL_USER}`);
console.log(`SENHA:${process.env.GMAIL_PASS}`);
console.log('--------------------------');
