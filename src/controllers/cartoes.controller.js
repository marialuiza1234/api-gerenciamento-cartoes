// Simula auto incremento de ID (como faria um banco de dados).
var nextId = 5;

// Banco em memoria: os dados se perdem ao reiniciar a API.
var cartoes = [
  {
    id: 1,
    nome: 'Maria Luiza Mendes Barros',
    numeroCartao: '5581 4373 7823 8141',
    //validade: '03/28',
    //cvv: '261',
    limite: 3500,
    bandeira: 'Mastercard',
    status: true,
  },
  {
    id: 2,
    nome: 'Maria Luiza Mendes Barros',
    numeroCartao: '6062 8282 5331 7339',
    //validade: '09/27',
    //cvv: '338',
    limite: 5000,
    bandeira: 'Visa',
    status: true,
  },
  {
    id: 3,
    nome: 'Maria Luiza Mendes Barros',
    numeroCartao: '3481 931747 46846',
    //validade: '10/27',
    cvv: '378',
    limite: 10000,
    bandeira: 'Elo',
    status: true,
   
  },
  {
    id: 4,
    nome: 'Maria Luiza Mendes Barros',
    numeroCartao: '6062 8284 0974 1960',
    //validade: '01/28',
    cvv: '813',
    limite: 7000,
    bandeira: 'Mastercard',
    status: true,
  }
];

// Gastos simulados vinculados a um cartao especifico (janeiro a maio de 2026).
var gastos = [

  // ── Cartao 1 – Maria Luiza ──────────────────────────────────────
  { id: 1,  cartaoId: 1, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 320.50, data: '2026-01-06' },
  { id: 2,  cartaoId: 1, descricao: 'Farmacia',              categoria: 'Saude',        valor: 75.00,  data: '2026-01-14' },
  { id: 3,  cartaoId: 1, descricao: 'Restaurante',           categoria: 'Alimentacao',  valor: 98.00,  data: '2026-01-21' },
  { id: 4,  cartaoId: 1, descricao: 'Netflix',               categoria: 'Lazer',        valor: 39.90,  data: '2026-02-01' },
  { id: 5,  cartaoId: 1, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 287.30, data: '2026-02-10' },
  { id: 6,  cartaoId: 1, descricao: 'Posto de Gasolina',    categoria: 'Transporte',   valor: 200.00, data: '2026-02-18' },
  { id: 7,  cartaoId: 1, descricao: 'Academia',              categoria: 'Saude',        valor: 89.90,  data: '2026-03-03' },
  { id: 8,  cartaoId: 1, descricao: 'Mercado',               categoria: 'Alimentacao',  valor: 310.20, data: '2026-03-15' },
  { id: 9,  cartaoId: 1, descricao: 'Farmacia',              categoria: 'Saude',        valor: 55.00,  data: '2026-03-22' },
  { id: 10, cartaoId: 1, descricao: 'Streaming Musica',      categoria: 'Lazer',        valor: 21.90,  data: '2026-04-01' },
  { id: 11, cartaoId: 1, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 345.00, data: '2026-04-08' },
  { id: 12, cartaoId: 1, descricao: 'Consulta Medica',       categoria: 'Saude',        valor: 250.00, data: '2026-04-17' },
  { id: 13, cartaoId: 1, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 250.90, data: '2026-05-05' },
  { id: 14, cartaoId: 1, descricao: 'Farmacia',              categoria: 'Saude',        valor: 89.50,  data: '2026-05-12' },
  { id: 15, cartaoId: 1, descricao: 'Restaurante',           categoria: 'Alimentacao',  valor: 120.00, data: '2026-05-20' },

  // ── Cartao 2 – Maria Luiza ──────────────────────────────────────
  { id: 16, cartaoId: 2, descricao: 'Combustivel',           categoria: 'Transporte',   valor: 280.00, data: '2026-01-05' },
  { id: 17, cartaoId: 2, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 415.60, data: '2026-01-12' },
  { id: 18, cartaoId: 2, descricao: 'Roupas',                categoria: 'Vestuario',    valor: 350.00, data: '2026-01-25' },
  { id: 19, cartaoId: 2, descricao: 'Uber',                  categoria: 'Transporte',   valor: 45.00,  data: '2026-02-03' },
  { id: 20, cartaoId: 2, descricao: 'Mercado',               categoria: 'Alimentacao',  valor: 390.00, data: '2026-02-14' },
  { id: 21, cartaoId: 2, descricao: 'Cinema',                categoria: 'Lazer',        valor: 60.00,  data: '2026-02-22' },
  { id: 22, cartaoId: 2, descricao: 'Combustivel',           categoria: 'Transporte',   valor: 300.00, data: '2026-03-07' },
  { id: 23, cartaoId: 2, descricao: 'Restaurante',           categoria: 'Alimentacao',  valor: 175.00, data: '2026-03-19' },
  { id: 24, cartaoId: 2, descricao: 'Farmacia',              categoria: 'Saude',        valor: 110.00, data: '2026-03-27' },
  { id: 25, cartaoId: 2, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 430.00, data: '2026-04-05' },
  { id: 26, cartaoId: 2, descricao: 'Manutencao Carro',     categoria: 'Transporte',   valor: 520.00, data: '2026-04-20' },
  { id: 27, cartaoId: 2, descricao: 'Combustivel',           categoria: 'Transporte',   valor: 300.00, data: '2026-05-09' },
  { id: 28, cartaoId: 2, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 405.00, data: '2026-05-17' },

  // ── Cartao 3 – Maria Luiza ─────────────────────────────────────
  { id: 29, cartaoId: 3, descricao: 'Equipamento PC',        categoria: 'Tecnologia',   valor: 1200.00, data: '2026-01-08' },
  { id: 30, cartaoId: 3, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 500.00,  data: '2026-01-15' },
  { id: 31, cartaoId: 3, descricao: 'Plano Celular',         categoria: 'Tecnologia',   valor: 89.90,   data: '2026-02-01' },
  { id: 32, cartaoId: 3, descricao: 'Mercado',               categoria: 'Alimentacao',  valor: 480.00,  data: '2026-02-12' },
  { id: 33, cartaoId: 3, descricao: 'Curso Online',          categoria: 'Educacao',     valor: 299.00,  data: '2026-02-20' },
  { id: 34, cartaoId: 3, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 520.00,  data: '2026-03-04' },
  { id: 35, cartaoId: 3, descricao: 'Hospedagem Cloud',      categoria: 'Tecnologia',   valor: 150.00,  data: '2026-03-10' },
  { id: 36, cartaoId: 3, descricao: 'Restaurante',           categoria: 'Alimentacao',  valor: 210.00,  data: '2026-03-25' },
  { id: 37, cartaoId: 3, descricao: 'Notebook Acessorio',   categoria: 'Tecnologia',   valor: 340.00,  data: '2026-04-02' },
  { id: 38, cartaoId: 3, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 510.00,  data: '2026-04-11' },
  { id: 39, cartaoId: 3, descricao: 'Combustivel',           categoria: 'Transporte',   valor: 380.00,  data: '2026-04-22' },
  { id: 40, cartaoId: 3, descricao: 'Mercado',               categoria: 'Alimentacao',  valor: 490.00,  data: '2026-05-07' },
  { id: 41, cartaoId: 3, descricao: 'Software Licenca',      categoria: 'Tecnologia',   valor: 199.00,  data: '2026-05-18' },

  // ── Cartao 4 – Maria Luiza ──────────────────────────────────
  { id: 42, cartaoId: 4, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 410.00,  data: '2026-01-07' },
  { id: 43, cartaoId: 4, descricao: 'Combustivel',           categoria: 'Transporte',   valor: 260.00,  data: '2026-01-14' },
  { id: 44, cartaoId: 4, descricao: 'Streaming',             categoria: 'Lazer',        valor: 55.90,   data: '2026-01-20' },
  { id: 45, cartaoId: 4, descricao: 'Mercado',               categoria: 'Alimentacao',  valor: 380.00,  data: '2026-02-05' },
  { id: 46, cartaoId: 4, descricao: 'Restaurante',           categoria: 'Alimentacao',  valor: 145.00,  data: '2026-02-13' },
  { id: 47, cartaoId: 4, descricao: 'Farmacia',              categoria: 'Saude',        valor: 98.50,   data: '2026-02-22' },
  { id: 48, cartaoId: 4, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 430.00,  data: '2026-03-06' },
  { id: 49, cartaoId: 4, descricao: 'Uber',                  categoria: 'Transporte',   valor: 75.00,   data: '2026-03-15' },
  { id: 50, cartaoId: 4, descricao: 'Academia',              categoria: 'Saude',        valor: 99.90,   data: '2026-03-24' },
  { id: 51, cartaoId: 4, descricao: 'Mercado',               categoria: 'Alimentacao',  valor: 395.00,  data: '2026-04-04' },
  { id: 52, cartaoId: 4, descricao: 'Combustivel',           categoria: 'Transporte',   valor: 310.00,  data: '2026-04-12' },
  { id: 53, cartaoId: 4, descricao: 'Curso Online',          categoria: 'Educacao',     valor: 199.00,  data: '2026-04-25' },
  { id: 54, cartaoId: 4, descricao: 'Supermercado',         categoria: 'Alimentacao',  valor: 440.00,  data: '2026-05-08' },
  { id: 55, cartaoId: 4, descricao: 'Restaurante',           categoria: 'Alimentacao',  valor: 160.00,  data: '2026-05-16' },
  { id: 56, cartaoId: 4, descricao: 'Farmacia',              categoria: 'Saude',        valor: 87.00,   data: '2026-05-21' }
];

// Faturas simuladas vinculadas a um cartao especifico (janeiro a maio de 2026).
// Cada mes gera uma fatura com o total dos gastos daquele mes.
// Status: "paga" para meses passados, "aberta" para o mes atual.
var faturas = [

  // ── Cartao 1 – Maria Luiza ──────────────────────────────────────
  { id: 1,  cartaoId: 1, referencia: '2026-01', vencimento: '2026-02-10', valorTotal: 493.50, status: 'paga'   },
  { id: 2,  cartaoId: 1, referencia: '2026-02', vencimento: '2026-03-10', valorTotal: 527.20, status: 'paga'   },
  { id: 3,  cartaoId: 1, referencia: '2026-03', vencimento: '2026-04-10', valorTotal: 455.10, status: 'paga'   },
  { id: 4,  cartaoId: 1, referencia: '2026-04', vencimento: '2026-05-10', valorTotal: 616.90, status: 'paga'   },
  { id: 5,  cartaoId: 1, referencia: '2026-05', vencimento: '2026-06-10', valorTotal: 460.40, status: 'aberta' },

  // ── Cartao 2 –  Maria Luiza ──────────────────────────────────────
  { id: 6,  cartaoId: 2, referencia: '2026-01', vencimento: '2026-02-15', valorTotal: 1045.60, status: 'paga'   },
  { id: 7,  cartaoId: 2, referencia: '2026-02', vencimento: '2026-03-15', valorTotal: 495.00,  status: 'paga'   },
  { id: 8,  cartaoId: 2, referencia: '2026-03', vencimento: '2026-04-15', valorTotal: 585.00,  status: 'paga'   },
  { id: 9,  cartaoId: 2, referencia: '2026-04', vencimento: '2026-05-15', valorTotal: 950.00,  status: 'paga'   },
  { id: 10, cartaoId: 2, referencia: '2026-05', vencimento: '2026-06-15', valorTotal: 705.00,  status: 'aberta' },

  // ── Cartao 3 –  Maria Luiza ─────────────────────────────────────
  { id: 11, cartaoId: 3, referencia: '2026-01', vencimento: '2026-02-20', valorTotal: 1700.00, status: 'paga'   },
  { id: 12, cartaoId: 3, referencia: '2026-02', vencimento: '2026-03-20', valorTotal: 868.90,  status: 'paga'   },
  { id: 13, cartaoId: 3, referencia: '2026-03', vencimento: '2026-04-20', valorTotal: 880.00,  status: 'paga'   },
  { id: 14, cartaoId: 3, referencia: '2026-04', vencimento: '2026-05-20', valorTotal: 1229.00, status: 'paga'   },
  { id: 15, cartaoId: 3, referencia: '2026-05', vencimento: '2026-06-20', valorTotal: 689.00,  status: 'aberta' },

  // ── Cartao 4 –  Maria Luiza ──────────────────────────────────
  { id: 16, cartaoId: 4, referencia: '2026-01', vencimento: '2026-02-12', valorTotal: 725.90,  status: 'paga'   },
  { id: 17, cartaoId: 4, referencia: '2026-02', vencimento: '2026-03-12', valorTotal: 623.50,  status: 'paga'   },
  { id: 18, cartaoId: 4, referencia: '2026-03', vencimento: '2026-04-12', valorTotal: 604.90,  status: 'paga'   },
  { id: 19, cartaoId: 4, referencia: '2026-04', vencimento: '2026-05-12', valorTotal: 904.00,  status: 'paga'   },
  { id: 20, cartaoId: 4, referencia: '2026-05', vencimento: '2026-06-12', valorTotal: 687.00,  status: 'aberta' }
];

function validarCartao(payload) {
  // Acumula erros de validacao para retornar tudo de uma vez.
  var erros = [];

  if (!payload || !payload.titular) {
    erros.push('Campo titular e obrigatorio.');
  }

  if (!payload || !/^\d{16}$/.test(String(payload.numero || ''))) {
    erros.push('Campo numero deve ter 16 digitos.');
  }

  if (!payload || !/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(String(payload.validade || ''))) {
    erros.push('Campo validade deve estar no formato MM/AA.');
  }

  if (!payload || !/^\d{3,4}$/.test(String(payload.cvv || ''))) {
    erros.push('Campo cvv deve ter 3 ou 4 digitos.');
  }

  if (!payload || typeof payload.limite !== 'number' || payload.limite < 0) {
    erros.push('Campo limite deve ser numero maior ou igual a zero.');
  }

  if (!payload || !payload.bandeira) {
    erros.push('Campo bandeira e obrigatorio.');
  }

  return erros;
}

function buscarCartaoPorId(id) {
  // Procura o cartao pelo ID numerico.
  return cartoes.find(function (cartao) {
    return cartao.id === id;
  });
}

function normalizarTexto(valor) {
  return String(valor || '').trim().toLowerCase();
}

function validarTitularDoCartao(cartao, titular) {
  // Compatibilidade: base em memoria antiga usa "nome" em vez de "titular".
  var titularDoCartao = cartao.titular || cartao.nome;
  return normalizarTexto(titularDoCartao) === normalizarTexto(titular);
}

function extrairReferenciaDaData(data) {
  // Converte data YYYY-MM-DD para referencia YYYY-MM.
  return String(data || '').slice(0, 7);
}

// Lista todos os cartoes cadastrados.
exports.listar = function (req, res) {
  res.json(cartoes);
};

// Retorna apenas um cartao pelo ID.
exports.obterPorId = function (req, res) {
  var id = Number(req.params.id);
  var cartao = buscarCartaoPorId(id);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  return res.json(cartao);
};

// Cria um novo cartao apos validar os campos obrigatorios.
exports.criar = function (req, res) {
  var payload = req.body || {};
  var erros = validarCartao(payload);

  if (erros.length > 0) {
    return res.status(400).json({ errors: erros });
  }

  var novoCartao = {
    id: nextId++,
    titular: payload.titular,
    numero: String(payload.numero),
    validade: String(payload.validade),
    cvv: String(payload.cvv),
    limite: payload.limite,
    bandeira: String(payload.bandeira),
    ativo: payload.ativo === false ? false : true
  };

  cartoes.push(novoCartao);

  return res.status(201).json(novoCartao);
};

// Atualiza todos os campos de um cartao existente.
exports.atualizar = function (req, res) {
  var id = Number(req.params.id);
  var payload = req.body || {};
  var cartao = buscarCartaoPorId(id);
  var erros = validarCartao(payload);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  if (erros.length > 0) {
    return res.status(400).json({ errors: erros });
  }

  cartao.titular = payload.titular;
  cartao.numero = String(payload.numero);
  cartao.validade = String(payload.validade);
  cartao.cvv = String(payload.cvv);
  cartao.limite = payload.limite;
  cartao.bandeira = String(payload.bandeira);
  cartao.ativo = payload.ativo === false ? false : true;

  return res.json(cartao);
};

// Marca o cartao como inativo (bloqueado).
exports.bloquear = function (req, res) {
  var id = Number(req.params.id);
  var cartao = buscarCartaoPorId(id);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  cartao.ativo = false;
  return res.json(cartao);
};

// Marca o cartao como ativo (desbloqueado).
exports.desbloquear = function (req, res) {
  var id = Number(req.params.id);
  var cartao = buscarCartaoPorId(id);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  cartao.ativo = true;
  return res.json(cartao);
};

// Remove o cartao da lista em memoria.
exports.remover = function (req, res) {
  var id = Number(req.params.id);
  var cartao = buscarCartaoPorId(id);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  cartoes = cartoes.filter(function (item) {
    return item.id !== id;
  });

  return res.status(204).send();
};

// Lista os gastos de um cartao especifico, validando se ele pertence ao titular informado.
exports.listarGastosPorCartaoETitular = function (req, res) {
  var id = Number(req.params.id);
  var titular = req.params.titular;
  var cartao = buscarCartaoPorId(id);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  if (!validarTitularDoCartao(cartao, titular)) {
    return res.status(404).json({ error: 'Cartao nao encontrado para este titular.' });
  }

  var gastosDoCartao = gastos.filter(function (gasto) {
    return gasto.cartaoId === id;
  }).map(function (gasto) {
    return {
      id: gasto.id,
      cartaoId: gasto.cartaoId,
      descricao: gasto.descricao,
      categoria: gasto.categoria,
      valor: gasto.valor,
      data: gasto.data
    };
  });

  return res.json(gastosDoCartao);
};

// Lista as faturas de um cartao especifico, validando se ele pertence ao titular informado.
exports.listarFaturasPorCartaoETitular = function (req, res) {
  var id = Number(req.params.id);
  var titular = req.params.titular;
  var cartao = buscarCartaoPorId(id);

  if (!cartao) {
    return res.status(404).json({ error: 'Cartao nao encontrado.' });
  }

  if (!validarTitularDoCartao(cartao, titular)) {
    return res.status(404).json({ error: 'Cartao nao encontrado para este titular.' });
  }

  var faturasDoCartao = faturas.filter(function (fatura) {
    return fatura.cartaoId === id;
  }).map(function (fatura) {
    var comprasDaFatura = gastos.filter(function (gasto) {
      return gasto.cartaoId === fatura.cartaoId && extrairReferenciaDaData(gasto.data) === fatura.referencia;
    }).sort(function (a, b) {
      // Mantem compras mais recentes primeiro.
      return b.data.localeCompare(a.data) || b.id - a.id;
    }).map(function (gasto) {
      return {
        id: gasto.id,
        descricao: gasto.descricao,
        categoria: gasto.categoria,
        valor: gasto.valor,
        data: gasto.data
      };
    });

    return {
      id: fatura.id,
      cartaoId: fatura.cartaoId,
      referencia: fatura.referencia,
      vencimento: fatura.vencimento,
      valorTotal: fatura.valorTotal,
      status: fatura.status,
      compras: comprasDaFatura
    };
  });

  return res.json(faturasDoCartao);
};
