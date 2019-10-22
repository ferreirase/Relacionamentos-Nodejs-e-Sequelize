const {Model, DataTypes} = require('sequelize');

class Tech extends Model{
  static init(connection){
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize: connection,
      tableName: 'techs'
    });
  }

  static associate(models){
    //belongsToMany = pertence a vários usuários(N - N)
    //parâmetros: chave estrangeira, nome da tabela que vai relacionar users com techs e o nome da tabela resultante
    this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'users'});
  }
}

module.exports = Tech;