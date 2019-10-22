const {Model, DataTypes} = require('sequelize');

class User extends Model{
  static init(connection){
    super.init({
      name: DataTypes.STRING, 
      email: DataTypes.STRING
    }, {
      sequelize: connection
    });
  }

  static associate(models){
    //hasMany: 1 usuário tem vários endereços
    this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'}); 
    //belongsToMany: 1 usuário pertence á várias tecnologias
    this.belongsToMany(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
  }
}

module.exports = User;