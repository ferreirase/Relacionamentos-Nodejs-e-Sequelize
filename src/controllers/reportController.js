const User = require('../models/users'); 
//operadores do Sequelize
const {Op} = require('sequelize');

module.exports = { 
  async show(req, res){
    const users = await User.findAll({
      //os atributos q eu quero receber no retorno(nomes das tabelas no banco)
      attributes: ['name', 'email'],
      where: {
        email: {
          //aqui estou dizendo que quero todos os usuários em que o email termina com @gmail.com
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        {association: 'addresses', where: {street: 'rua poraquê'}}, //associação de endereços
        {association: 'techs', required: false, //associação de tecnologias 
        where: {
          name: {
            //que começa com React e depois qualquer coisa
            [Op.iLike]: 'React%'
          }
        }} 
      ]
    });

    return res.json(users);
  }
}