const {
  findAllProdutos,
  findProdutoById,
  findProdutoByName,
  updateProdutoById,
  deleteProdutoById,
  createProduto,
} = require("../services/produtos");

const getAllProdutos = async (req, res) => {
  const results = await findAllProdutos();

  return res.json(results);
};

const getProdutoById = async (req, res) => {
  const { id } = req.params;

  const result = await findProdutoById(id);

  return res.json(result);
};

const getProdutoByName = async (req, res) => {
  const { nome } = req.params;
  console.log(nome);

  const result = await findProdutoByName(nome);

  if (result.length === 0) {
    return res.json({
      message: `Não encontramos nenhum produto com o nome ${nome}!`,
    });
  }

  return res.json(result);
};

const postProduto = async (req, res) => {
  const produto = req.body;

  const result = await createProduto(produto);

  if (result) {
    res.json({ message: "Criado com sucesso!" });
  } else {
    res.json({ message: "Produto já existe" });
  }
};

const putProduto = async (req, res) => {
  const { id } = req.params;
  const produto = req.body;
  const result = await updateProdutoById(id, produto);

  if (!result) {
    return res.json({ message: "Produto não encontrado" });
  }
  return res.json({ message: "Produto atualizado com Sucesso!" });
};

const removeProduto = async (req, res) => {
  const { id } = req.params;

  const result = await deleteProdutoById(id);

  if (!result) {
    return res.json({ message: "Produto não encontrado" });
  }
  return res.json({ message: "Produto deletado com Sucesso!" });
};

module.exports = {
  getAllProdutos,
  getProdutoById,
  getProdutoByName,
  postProduto,
  putProduto,
  removeProduto,
};
