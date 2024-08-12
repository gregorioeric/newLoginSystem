const { findAllEnderecos, findEnderecoById } = require("../services/enderecos");

const getAllEnderecos = async (req, res) => {
  const result = await findAllEnderecos();

  return res.json(result);
};

const getEnderecoById = async (req, res) => {
  const { id } = req.params;

  const result = await findEnderecoById(id);

  return res.json(result);
};

module.exports = {
  getAllEnderecos,
  getEnderecoById,
};
