const {
  findAllVendas,
  findVendaById,
  createVenda,
} = require("../services/vendas");

const getAllVenda = async (req, res) => {
  const results = await findAllVendas();

  return res.json(results);
};

const getVendaById = async (req, res) => {
  const { id } = req.params;
  const result = await findVendaById(id);

  return res.json(result);
};

const postVenda = async (req, res) => {
  const venda = req.body;

  const result = await createVenda(venda);

  if (result) {
    return res.json({
      message: "Predido realizado. Estamos preparando seu pedido!",
    });
  } else {
    return res.json({
      message: "Pedido não realizado. Verificar se seus dados estão corretos!",
    });
  }
};

module.exports = {
  getAllVenda,
  getVendaById,
  postVenda,
};
