const {
  selectAllEnderecos,
  selectEnderecoById,
  insertEndereco,
  updateEnderecoById,
  deleteEnderecoById,
} = require("../models/enderecos");

const findAllEnderecos = async () => {
  const result = await selectAllEnderecos();
  const data = {
    total: result.length,
    results: result,
  };

  return data;
};

const findEnderecoById = async (id) => {
  const [result] = await selectEnderecoById(id);

  if (!result) {
    return false;
  }

  return result;
};

const createEndereco = async (endereco) => {
  const result = await insertEndereco(endereco);

  return result;
};

const updateEndereco = async (id, endereco) => {
  const findEndereco = await findEnderecoById(id);

  if (findEndereco) {
    const result = await updateEnderecoById(id, endereco);
    return result;
  }

  return false;
};

const deleteEndereco = async (id) => {
  const findEndereco = await findEnderecoById(id);

  if (findEndereco) {
    const result = await deleteEnderecoById(id);
    return result;
  }

  return false;
};

module.exports = {
  findAllEnderecos,
  findEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco,
};
