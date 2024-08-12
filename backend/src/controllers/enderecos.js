const {
  findAllEnderecos,
  findEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco,
} = require("../services/enderecos");

const getAllEnderecos = async (req, res) => {
  const result = await findAllEnderecos();

  return res.json(result);
};

const getEnderecoById = async (req, res) => {
  const { id } = req.params;

  const result = await findEnderecoById(id);

  return res.json(result);
};

const postEndereco = async (req, res) => {
  const endereco = req.body;

  const result = await createEndereco(endereco);

  if (result) {
    return res.json({ message: "Criado endereço com sucesso!" });
  } else {
    return res.json({ message: "Enbdereço já existe!" });
  }
};

const putEndereco = async (req, res) => {
  const { id } = req.params;
  const endereco = req.body;
  const result = await updateEndereco(id, endereco);

  if (!result) {
    return res.json({ message: "Endereço não encontrado!" });
  }

  return res.json({ message: "Endereço atualizado com sucesso!" });
};

const removeEndereco = async (req, res) => {
  const { id } = req.params;
  const result = await deleteEndereco(id);

  if (!result) {
    return res.json({ message: "Endereço não encontrado!" });
  }

  return res.json({ message: "Endereço deletado com sucesso!" });
};

module.exports = {
  getAllEnderecos,
  getEnderecoById,
  postEndereco,
  putEndereco,
  removeEndereco,
};
