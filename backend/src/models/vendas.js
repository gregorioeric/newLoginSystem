const connection = require("./connect");

const selectAllVendas = async () => {
  const [results] = await connection.execute("SELECT * FROM venda");

  return results;
};

const selectVendaById = async (id) => {
  const [result] = await connection.execute(
    "SELECT * FROM venda WHERE venda_id = ?",
    [id]
  );

  return result;
};

const insertVenda = async (venda) => {
  const {
    venda_user_id,
    venda_produto_id,
    venda_endereco_id,
    venda_num_pedido,
    venda_quantidade,
    venda_valor_total,
    venda_pagamento,
    venda_data,
  } = venda;
  const [result] = await connection.execute(
    "INSERT INTO venda (venda_user_id, venda_produto_id, venda_endereco_id, venda_num_pedido, venda_quantidade, venda_valor_total, venda_pagamento, venda_data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      venda_user_id,
      venda_produto_id,
      venda_endereco_id,
      venda_num_pedido,
      venda_quantidade,
      venda_valor_total,
      venda_pagamento,
      venda_data,
    ]
  );

  return result;
};

const updateVenda = async (id, venda) => {
  const {
    venda_user_id,
    venda_produto_id,
    venda_endereco_id,
    venda_num_pedido,
    venda_quantidade,
    venda_valor_total,
    venda_pagamento,
    venda_data,
  } = venda;
  const [result] = await connection.execute(
    "UPDATE venda SET venda_user_id = ?, venda_produto_id = ?, venda_endereco_id = ?, venda_num_pedido = ?, venda_quantidade = ?, venda_valor_total = ?, venda_pagamento = ?, venda_data = ? WHERE = venda_id = ?",
    [
      venda_user_id,
      venda_produto_id,
      venda_endereco_id,
      venda_num_pedido,
      venda_quantidade,
      venda_valor_total,
      venda_pagamento,
      venda_data,
      id,
    ]
  );

  return result;
};

const DeleteVendaById = async (id) => {
  const [result] = await connection.execute(
    "DELETE FROM venda WHERE venda_id = ?",
    [id]
  );

  return result;
};

module.exports = {
  selectAllVendas,
  selectVendaById,
  insertVenda,
  updateVenda,
  DeleteVendaById,
};
