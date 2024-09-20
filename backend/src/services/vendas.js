const {
  selectVendaById,
  insertVenda,
  selectAllVendas,
} = require("../models/vendas");
const { findEnderecoById } = require("./enderecos");
const { findProdutoById } = require("./produtos");
const { findUserById } = require("./users");

const findAllVendas = async () => {
  const results = await selectAllVendas();
  const data = {
    total: results.length,
    results: results,
  };

  return data;
};

const findVendaById = async (id) => {
  const [result] = await selectVendaById(id);
  const { venda_user_id, venda_produto_id, venda_endereco_id } = result;
  console.log(result);

  const [user, produto, endereco] = await Promise.all([
    findUserById(venda_user_id),
    findProdutoById(venda_produto_id),
    findEnderecoById(venda_endereco_id),
  ]);

  console.log(user);
  console.log(produto);
  console.log(endereco);

  if (!result) {
    return false;
  }

  result.user = user.user_name;

  return result;
};

const createVenda = async (venda) => {
  const { venda_user_id, venda_produto_id, venda_endereco_id } = venda;

  const [user, produto, endereco] = await Promise.all([
    findUserById(venda_user_id),
    findProdutoById(venda_produto_id),
    findEnderecoById(venda_endereco_id),
  ]);

  console.log(user);
  console.log(produto);
  console.log(endereco);

  if (!user || !produto || !endereco) {
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
