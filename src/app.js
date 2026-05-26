const express = require('express');
const cartoesRoutes = require('./routes/cartoes.routes');

const app = express();

// Permite receber JSON no corpo das requisicoes (POST, PUT, PATCH).
app.use(express.json());

// Rota inicial para teste rapido da API.
app.get('/', function (req, res) {
  res.json({
    ok: true,
    message: 'API de gerenciamento de cartoes no ar',
    date: new Date().toISOString()
  });
});

// Health check simples para monitoramento.
app.get('/health', function (req, res) {
  res.status(200).json({ status: 'UP' });
});

// Todas as rotas de cartoes ficam agrupadas em /cartoes.
app.use('/cartoes', cartoesRoutes);

module.exports = app;
