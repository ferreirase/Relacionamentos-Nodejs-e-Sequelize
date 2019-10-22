'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('user_techs', 
    { 
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
      }, 
      user_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        //chave estrangeira
        references: { model: 'users', key: 'id' }, 
        //define o que acontece quando o ID do usuário mudar
        onUpdate: 'CASCADE', //o CASCADE define que aconteça o mesmo com a tabela endereço
        //define o que acontece quando o ID do usuário for deletado
        onDelete: 'CASCADE' //o CASCADE define que aconteça o mesmo com a tabela endereço
      },
      tech_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        //chave estrangeira
        references: { model: 'techs', key: 'id' }, 
        //define o que acontece quando o ID do usuário mudar
        onUpdate: 'CASCADE', //o CASCADE define que aconteça o mesmo com a tabela endereço
        //define o que acontece quando o ID do usuário for deletado
        onDelete: 'CASCADE' //o CASCADE define que aconteça o mesmo com a tabela endereço
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false
      }, 
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user_techs');
  }
};
