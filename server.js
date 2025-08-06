// Importa o app configurado em app.js
const app = require('./app');

// Define a porta que o servidor vai escutar (pega do .env ou usa 3000)
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});