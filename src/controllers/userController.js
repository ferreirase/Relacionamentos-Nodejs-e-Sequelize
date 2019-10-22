const User = require('../models/users');

module.exports = {

  async index(req, res){
    const users = await User.findAll();

    return res.json(users);
  },

  async showById(req, res){
    const {id} = req.params;
    if(!id){
      return res.status(404).json({error: 'Informe o ID do usuário!'});
    }
    const user = await User.findOne({
      where: {
        id: id
      }
    });

    if(!user){
      return res.status(404).json({error: 'Usuário não encontrado!'});
    }

    return res.json(user);
  },

  async store(req, res){
    const {name, email} = req.body;

    if(User.findOne({
      where: {
        email: email
      }
    })){return res.status(400).json({error: 'Usuário já cadastrado!'});}

    const user = await User.create({
      name, email
    });

    return res.json(user);
  }
}