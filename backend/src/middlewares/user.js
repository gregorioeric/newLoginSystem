const fields = (req, res, next) => {
  const { user_name, user_email, user_password, user_phone } = req.body;

  const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

  if (!regex_email.test(user_email)) {
    return res.json({ message: "Digite um email valido" });
  }

  if (!regex_senha.test(user_password)) {
    return res.json({
      message:
        "Digite Letras Maiuscula, Minuscula, Numeros, Caracteres Especiais",
    });
  }

  if (user_password.length <= 8) {
    return res.json({
      message: "A senha tem que ter no minimo 8 caracteres",
    });
  }

  if (!user_name || !user_email || !user_password || !user_phone) {
    return res.json({ message: "Os campos não podem ser vazio!" });
  }
  next();
};

module.exports = {
  fields,
};
