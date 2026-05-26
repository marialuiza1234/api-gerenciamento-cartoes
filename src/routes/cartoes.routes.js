const express = require('express');
const cartoesController = require('../controllers/cartoes.controller');

const router = express.Router();

// GET /cartoes -> lista todos os cartoes.
router.get('/', cartoesController.listar);
// GET /cartoes/titulares/:titular/cartoes/:id/gastos -> lista gastos por titular e cartao.
router.get('/titulares/:titular/cartoes/:id/gastos', cartoesController.listarGastosPorCartaoETitular);
// GET /cartoes/titulares/:titular/cartoes/:id/faturas -> lista faturas por titular e cartao.
router.get('/titulares/:titular/cartoes/:id/faturas', cartoesController.listarFaturasPorCartaoETitular);
// GET /cartoes/:id -> busca um cartao especifico.
router.get('/:id', cartoesController.obterPorId);
// POST /cartoes -> cria um novo cartao.
router.post('/', cartoesController.criar);
// PUT /cartoes/:id -> atualiza todos os dados de um cartao.
router.put('/:id', cartoesController.atualizar);
// PATCH /cartoes/:id/bloquear -> desativa cartao.
router.patch('/:id/bloquear', cartoesController.bloquear);
// PATCH /cartoes/:id/desbloquear -> reativa cartao.
router.patch('/:id/desbloquear', cartoesController.desbloquear);
// DELETE /cartoes/:id -> remove cartao.
router.delete('/:id', cartoesController.remover);

module.exports = router;
