//definindo com letra maiúscula por se tratar de uma classe
const Sequelize = require('sequelize');
//importando configurações do Banco de dados 
const dbConfig = require('../config/database');

const User = require('../models/users');
const Address = require('../models/address');
const Tech = require('../models/tech');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;