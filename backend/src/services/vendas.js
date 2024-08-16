const { selectAllUsers } = require("../models/users");
const { selectVendaById, insertVenda } = require("../models/vendas");
const { findEnderecoById } = require("./enderecos");
const { findProdutoById } = require("./produtos");
const { findUserById } = require("./users");

const findAllVendas = async () => {
  const results = await selectAllUsers();
  const data = {
    total: results.length,
    results: results,
  };

  return data;
};

const findVendaById = async (id) => {
  const [result] = await selectVendaById(id);

  if (!result) {
    return false;
  }

  return result;
};

const createVenda = async (venda) => {
  const { venda_user_id, venda_produto_id, venda_endereco_id } = venda;

  const user = await findUserById(venda_user_id);
  const produto = await findProdutoById(venda_produto_id);
  const endereco = await findEnderecoById(venda_endereco_id);

  const findUser = user.find((e) => e.user_id === venda_user_id);
  const findProduto = produto.find((e) => e.produto_id === venda_produto_id);
  const findEndereco = endereco.find((e) => e.end_id === venda_endereco_id);

  if (!findUser || !findProduto || !findEndereco) {
    return false;
  }

  const result = await insertVenda(venda);

  return result;
};

module.exports = {
  findAllVendas,
  findVendaById,
  createVenda,
};
