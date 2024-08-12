const {
  selectAllProdutos,
  selectProdutoById,
  selectProdutoByName,
  insertProduto,
  updateProduto,
  deleteProduto,
} = require("../models/produtos");

const findAllProdutos = async () => {
  const results = await selectAllProdutos();
  const data = {
    total: results.length,
    results: results,
  };
  return data;
};

const findProdutoById = async (produto_id) => {
  const [result] = await selectProdutoById(produto_id);

  if (!result) {
    return false;
  }

  return result;
};

const findProdutoByName = async (produto_name) => {
  const result = await selectProdutoByName(produto_name);

  if (!result) {
    return false;
  }

  return result;
};

const createProduto = async (produto) => {
  const { produto_name } = produto;
  const findProduto = await findAllProdutos();
  const findProdutoByName = findProduto.results.find(
    (e) => e.produto_name === produto_name
  );

  if (findProdutoByName) {
    return false;
  }

  const result = await insertProduto(produto);

  return result;
};

const updateProdutoById = async (produto_id, produto) => {
  const [findProduto] = await selectProdutoById(produto_id);

  if (findProduto) {
    const result = await updateProduto(produto_id, produto);

    return result;
  }

  return false;
};

const deleteProdutoById = async (produto_id) => {
  const [findProduto] = await selectProdutoById(produto_id);

  if (findProduto) {
    const result = await deleteProduto(produto_id);

    return result;
  }

  return false;
};

module.exports = {
  findAllProdutos,
  findProdutoById,
  findProdutoByName,
  createProduto,
  updateProdutoById,
  deleteProdutoById,
};
