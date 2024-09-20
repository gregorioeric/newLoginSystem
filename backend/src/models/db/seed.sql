-- USE `pizzaria`;

-- INSERT INTO users(nome_user, email_user, user_password)
-- VALUES('Eric Gregorio', 'eric@eric.com', '321654');

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
('Atum', 'Pizza com atum e cebola.', 38.00, 'Pizza', 'Especiais', 1),
('Bacon', 'Pizza com bacon crocante.', 43.00, 'Pizza', 'Especiais', 1),
('Bauru', 'Pizza inspirada no tradicional sanduíche bauru.', 46.00, 'Pizza', 'Especiais', 1),
('Mussarela com Bacon', 'Pizza de mussarela com adição de bacon.', 47.00, 'Pizza', 'Especiais', 1),
('Atum com Mussarela', 'Pizza de atum com queijo mussarela.', 44.00, 'Pizza', 'Especiais', 1);


-- -- Inserindo dados na tabela users
-- INSERT INTO pizzaria.users (user_name, user_email, user_password, user_date, user_phone)
-- VALUES
-- ('João Silva', 'joao.silva@example.com', 'FR$56&uj', '2024-08-01 14:30:00', '+55 11 98765-4321'),
-- ('Maria Oliveira', 'maria.oliveira@example.com', 'FR$56&uj', '2024-07-25 09:00:00', '+55 21 91234-5678'),
-- ('Carlos Pereira', 'carlos.pereira@example.com', 'FR$56&uj', '2024-08-03 11:45:00', '+55 31 99876-5432'),
-- ('Ana Costa', 'ana.costa@example.com', 'FR$56&uj', '2024-07-30 16:20:00', '+55 41 98765-4321'),
-- ('Pedro Santos', 'pedro.santos@example.com', 'FR$56&uj', '2024-08-05 13:00:00', '+55 51 92345-6789');

-- INSERT INTO `pizzaria`.`endereco` (end_rua, end_numero, end_complemento, end_bairro, end_cidade_uf, end_cep)
-- VALUES
-- ('Rua das Acácias', 456, 'Apto 101', 'Jardim das Flores', 'São Paulo - SP', '01234-567'),
-- ('Avenida Paulista', 1000, 'Sala 502', 'Centro', 'São Paulo - SP', '01310-100'),
-- ('Rua dos Alecrins', 789, NULL, 'Vila das Hortênsias', 'São Paulo - SP', '01435-678'),
-- ('Rua do Limoeiro', 234, 'Casa 2', 'Jardim das Palmeiras', 'Campinas - SP', '13012-345'),
-- ('Avenida Brigadeiro Faria Lima', 1234, 'Conjunto 101', 'Itaim Bibi', 'São Paulo - SP', '04538-000');


-- -- Inserir dados de exemplo na tabela venda
-- INSERT INTO `pizzaria`.`venda` (
--     venda_user_id,
--     venda_produto_id,
--     venda_endereco_id,
--     venda_num_pedido,
--     venda_quantidade,
--     venda_valor_total,
--     venda_pagamento,
--     venda_data
-- )
-- VALUES
--     (1, 1, 1, 1001, 2, 59.90, 'Cartão de Crédito', NOW()),
--     (2, 3, 2, 1002, 1, 29.90, 'Dinheiro', NOW()),
--     (1, 2, 3, 1003, 3, 89.70, 'Pix', NOW()),
--     (3, 4, 4, 1004, 5, 149.50, 'Boleto', NOW()),
--     (2, 5, 5, 1005, 4, 119.80, 'Cartão de Débito', NOW());

-- -----------------------------------------------------
-- Inserindo dados na tabela `users`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`users` (`user_name`, `user_email`, `user_password`, `user_date`, `user_phone`)
VALUES 
('João Silva', 'joao.silva@example.com', 'password123', NOW(), '123456789'),
('Maria Oliveira', 'maria.oliveira@example.com', 'password456', NOW(), '987654321'),
('Carlos Souza', 'carlos.souza@example.com', 'password789', NOW(), '555666777');

-- -----------------------------------------------------
-- Inserindo dados na tabela `endereco`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`endereco` (`end_rua`, `end_numero`, `end_complemento`, `end_bairro`, `end_cidade_uf`, `end_cep`)
VALUES 
('Rua das Flores', 123, 'Apto 101', 'Centro', 'Cidade X - SP', '12345-678'),
('Avenida Brasil', 456, NULL, 'Jardim', 'Cidade Y - RJ', '23456-789'),
('Rua das Palmeiras', 789, 'Casa 2', 'Vila Nova', 'Cidade Z - MG', '34567-890');

-- -----------------------------------------------------
-- Inserindo dados na tabela `produtos`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`produtos` (`produto_name`, `produto_desc`, `produto_valor`, `produto_tipo`, `produto_categoria`, `produto_status`)
VALUES 
('Pizza Margherita', 'Pizza com molho de tomate e queijo', 29.90, 'Pizza', 'Tradicional', 1),
('Pizza Calabresa', 'Pizza com calabresa e cebola', 34.90, 'Pizza', 'Especial', 1),
('Refrigerante Lata', 'Refrigerante em lata', 5.00, 'Bebida', 'Bebidas', 1);

-- -----------------------------------------------------
-- Inserindo dados na tabela `pedido`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`pedido` (`pedido_user_id`, `pedido_valor_total`, `pedido_data`)
VALUES 
(1, 34.90, '2024-08-16'),
(2, 29.90, '2024-08-16'),
(3, 39.90, '2024-08-16');

-- -----------------------------------------------------
-- Inserindo dados na tabela `venda`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`venda` (`venda_user_id`, `venda_produto_id`, `venda_endereco_id`, `venda_num_pedido`, `venda_quantidade`, `venda_valor_total`, `venda_pagamento`, `venda_data`)
VALUES 
(1, 1, 1, 1, 1, 29.90, 'Cartão', NOW()),
(1, 3, 1, 1, 1, 5.00, 'Cartão', NOW()),
(2, 2, 2, 2, 1, 34.90, 'Dinheiro', NOW()),
(3, 3, 3, 3, 2, 10.00, 'Cartão', NOW());

-- -----------------------------------------------------
-- Inserindo dados na tabela `endereco_users`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`endereco_users` (`endereco_end_id`, `users_user_id`)
VALUES 
(1, 1),
(2, 2),
(3, 3);

-- -----------------------------------------------------
-- Inserindo dados na tabela `admin_users`
-- -----------------------------------------------------
INSERT INTO `pizzaria`.`admin_users` (`admin_name`, `admin_email`, `admin_password`, `admin_date`)
VALUES 
('Administrador 1', 'admin1@example.com', 'adminpass123', NOW()),
('Administrador 2', 'admin2@example.com', 'adminpass456', NOW());

