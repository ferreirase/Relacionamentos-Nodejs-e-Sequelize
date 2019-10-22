const Tech = require('../models/tech');
const User = require('../models/users');

module.exports = { 
  async store(req, res){
    const {user_id} = req.params;
    const {name} = req.body;  
    const user = await User.findByPk(user_id);

    if(!user){
      return res.status(400).json({error: 'Usuário não encontrado!'});
    }

    const [tech] = await Tech.findOrCreate({
      where: {name}
    });

    await user.addTech(tech);

    return res.json(tech);
  }, 

  async delete(req, res){
    const {user_id} = req.params; 
    const {name} = req.body;

    const user = await User.findByPk(user_id);

    if(!user){
      return res.status(400).json({error: 'Usuário não encontrado!'});
    } 

    const tech = await Tech.findOne({
      where: {name}
    });

    await user.removeTech(tech);

    return res.json({ok: 'Tecnologia removida com sucesso!'});

  }, 

  async show(req, res){
    const {user_id} = req.params;

    const user = await User.findByPk(user_id, {
      //attributes: quais atributos do resultado eu quero receber 
      //through: {attributes: []} => quais atributos da tabelas resultante quero receber. 
      include: {association: 'techs', attributes: ['name'], through: {attributes: []}}
    });

    if(!user){
      return res.status(400).json({error: 'Usuário não encontrado!'});
    }     

    if(user.techs.length === 0){
      return res.status(400).json({error: 'Tecnologias não informadas!'});
    }

    return res.json(user.techs);
  }
}