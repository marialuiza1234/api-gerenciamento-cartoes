// Ponto de entrada da aplicacao: sobe o servidor HTTP.
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta definida.
app.listen(PORT, '0.0.0.0', function () {
  console.log('Servidor rodando na porta ' + PORT);
});
