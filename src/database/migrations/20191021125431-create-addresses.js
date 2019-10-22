'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('addresses', 
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
      zipcode: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      street: {
        type: Sequelize.STRING, 
        allowNull: false
      },  
      number: {
        type: Sequelize.INTEGER, 
        allowNull: false
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
      return queryInterface.dropTable('addresses');
  }
};
