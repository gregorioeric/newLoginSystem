const connection = require("./connect");

const selectAllEnderecos = async () => {
  const [result] = await connection.execute("SELECT * FROM endereco");

  return result;
};

const selectEnderecoById = async (id) => {
  const [result] = await connection.execute(
    "SELECT * FROM endereco WHERE end_id = ?",
    [id]
  );

  return result;
};

const insertEndereco = async (endereco) => {
  const {
    end_rua,
    end_numero,
    end_complemento,
    end_bairro,
    end_cidade_uf,
    end_cep,
  } = endereco;
  const [result] = await connection.execute(
    "INSERT INTO endereco (end_rua, end_numero, end_complemento, end_bairro, end_cidade_uf, end_cep) VALUES (?, ?, ?, ?, ?, ?);",
    [end_rua, end_numero, end_complemento, end_bairro, end_cidade_uf, end_cep]
  );

  return result;
};

const updateEnderecoById = async (id, endereco) => {
  const {
    end_rua,
    end_numero,
    end_complemento,
    end_bairro,
    end_cidade_uf,
    end_cep,
  } = endereco;
  const [result] = await connection.execute(
    "UPDATE endereco SET end_rua = ?, end_numero = ?, end_complemento = ?, end_bairro = ?, end_cidade_uf = ?, end_cep = ? WHERE ende_id = ?;",
    [
      end_rua,
      end_numero,
      end_complemento,
      end_bairro,
      end_cidade_uf,
      end_cep,
      id,
    ]
  );

  return result;
};

const deleteEnderecoById = async (id) => {
  const [result] = await connection.execute(
    "DELETE FROM endereco WHERE end_id = ?;",
    [id]
  );

  return result;
};

module.exports = {
  selectAllEnderecos,
  selectEnderecoById,
  insertEndereco,
  updateEnderecoById,
  deleteEnderecoById,
};
