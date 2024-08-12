USE `pizzaria`;

INSERT INTO users(nome_user, email_user, user_password)
VALUES('Eric Gregorio', 'eric@eric.com', '321654');

-- Insere produtos na tabela `produtos`
INSERT INTO `pizzaria`.`produtos` (
  `produto_name`, 
  `produto_desc`, 
  `produto_valor`, 
  `produto_tipo`, 
  `produto_categoria`, 
  `produto_status`
) VALUES
('Frango com Catupiry', 'Pizza com frango desfiado e catupiry.', 45.00, 'Pizza', 'Especialidades', 1),
('Mussarela', 'Pizza clássica com queijo mussarela.', 35.00, 'Pizza', 'Clássicas', 1),
('Peperoni', 'Pizza com fatias de peperoni.', 40.00, 'Pizza', 'Clássicas', 1),
('Calabresa', 'Pizza com calabresa, cebola e azeitonas.', 42.00, 'Pizza', 'Clássicas', 1),
('Atum', 'Pizza com atum e cebola.', 38.00, 'Pizza', 'Especiais', 1),
('Bacon', 'Pizza com bacon crocante.', 43.00, 'Pizza', 'Especiais', 1),
('Bauru', 'Pizza inspirada no tradicional sanduíche bauru.', 46.00, 'Pizza', 'Especiais', 1),
('Mussarela com Bacon', 'Pizza de mussarela com adição de bacon.', 47.00, 'Pizza', 'Especiais', 1),
('Atum com Mussarela', 'Pizza de atum com queijo mussarela.', 44.00, 'Pizza', 'Especiais', 1);


-- Inserindo dados na tabela users
INSERT INTO pizzaria.users (user_name, user_email, user_password, user_date, user_phone)
VALUES
('João Silva', 'joao.silva@example.com', 'FR$56&uj', '2024-08-01 14:30:00', '+55 11 98765-4321'),
('Maria Oliveira', 'maria.oliveira@example.com', 'FR$56&uj', '2024-07-25 09:00:00', '+55 21 91234-5678'),
('Carlos Pereira', 'carlos.pereira@example.com', 'FR$56&uj', '2024-08-03 11:45:00', '+55 31 99876-5432'),
('Ana Costa', 'ana.costa@example.com', 'FR$56&uj', '2024-07-30 16:20:00', '+55 41 98765-4321'),
('Pedro Santos', 'pedro.santos@example.com', 'FR$56&uj', '2024-08-05 13:00:00', '+55 51 92345-6789');

INSERT INTO `pizzaria`.`endereco` (end_rua, end_numero, end_complemento, end_bairro, end_cidade_uf, end_cep)
VALUES
('Rua das Acácias', 456, 'Apto 101', 'Jardim das Flores', 'São Paulo - SP', '01234-567'),
('Avenida Paulista', 1000, 'Sala 502', 'Centro', 'São Paulo - SP', '01310-100'),
('Rua dos Alecrins', 789, NULL, 'Vila das Hortênsias', 'São Paulo - SP', '01435-678'),
('Rua do Limoeiro', 234, 'Casa 2', 'Jardim das Palmeiras', 'Campinas - SP', '13012-345'),
('Avenida Brigadeiro Faria Lima', 1234, 'Conjunto 101', 'Itaim Bibi', 'São Paulo - SP', '04538-000');
