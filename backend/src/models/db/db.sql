DROP DATABASE IF EXISTS system_login;

CREATE DATABASE system_login;

USE system_login;

CREATE TABLE users(
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_user VARCHAR(100) NOT NULL,
email_user VARCHAR(120) NOT NULL,
user_password VARCHAR(255) NOT NULL
);