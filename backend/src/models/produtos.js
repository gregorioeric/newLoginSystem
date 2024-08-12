const connection = require("./connect");

const selectAllProdutos = async () => {
  const [results] = await connection.execute("SELECT * FROM produtos");

  return results;
};

const selectProdutoById = async (produto_id) => {
  const [result] = await connection.execute(
    "SELECT * FROM produtos WHERE produto_id = ?",
    [produto_id]
  );

  return result;
};

const selectProdutoByName = async (produto_name) => {
  const [result] = await connection.execute(
    "SELECT * FROM produtos WHERE produto_name LIKE ?",
    [`%${produto_name}%`]
  );

  return result;
};

const insertProduto = async (produto) => {
  const {
    produto_name,
    produto_desc,
    produto_valor,
    produto_tipo,
    produto_categoria,
    produto_status,
  } = produto;
  const [result] = await connection.execute(
    "INSERT INTO produtos (produto_name, produto_desc, produto_valor, produto_tipo, produto_categoria, produto_status) VALUES (?, ?, ?, ?, ?, ?)",
    [
      produto_name,
      produto_desc,
      produto_valor,
      produto_tipo,
      produto_categoria,
      produto_status,
    ]
  );

  return result;
};

const updateProduto = async (produto_id, produto) => {
  const {
    produto_name,
    produto_desc,
    produto_valor,
    produto_tipo,
    produto_categoria,
    produto_status,
  } = produto;
  const [result] = await connection.execute(
    "UPDATE produtos SET produto_name = ?, produto_desc = ?, produto_valor = ?, produto_tipo = ?, produto_categoria = ?, produto_status = ? WHERE produto_id = ?",
    [
      produto_name,
      produto_desc,
      produto_valor,
      produto_tipo,
      produto_categoria,
      produto_status,
      produto_id,
    ]
  );

  return result;
};

const deleteProduto = async (produto_id) => {
  const [result] = await connection.execute(
    "DELETE FROM produtos WHERE produto_id = ?",
    [produto_id]
  );

  return result;
};

module.exports = {
  selectAllProdutos,
  selectProdutoById,
  selectProdutoByName,
  insertProduto,
  updateProduto,
  deleteProduto,
};
