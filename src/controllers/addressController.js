const Address = require('../models/address');
const User = require('../models/users');

module.exports = { 
  async store(req, res){
    const {user_id} = req.params;
    const {zipcode, street, number} = req.body;

    const user = await User.findByPk(user_id);

    if(!user){
      return res.status(400).json({error: 'Usuário não encontrado!'});
    }

    const address = await Address.create({
      zipcode, 
      street,
      number,
      user_id
    });

    return res.json(address);

  },

  async show(req, res){
    const {user_id} = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses'}
    });

    if(!user){
      return res.status(400).json({error: 'Usuário não encontrado!'});
    }
    const addresses = user.addresses;
    const [firstName, ] = user.name.split(' ');

    if(addresses.length === 0){
      return res.status(400).json({error: `${firstName} não tem um endereço cadastrado!`});
    }
    const data = addresses[0];
    return res.json({
      'Rua': data.street, 
      'Número': data.number, 
      'CEP': data.zipcode
    });
  }
}