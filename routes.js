const express = require('express');
const UserController = require('./src/controllers/userController');
const AddressController = require('./src/controllers/addressController');
const TechController = require('./src/controllers/techController');
const ReportController = require('./src/controllers/reportController');
const routes = express.Router();

function middleware(req, res, next){
  console.log('Server running...');

  next();
};

routes.get('/' , (req, res) => { 
  return res.json({message: 'Server is ready'});
});

//rotas de usuários
routes.get('/show', middleware, UserController.index);
routes.post('/create' , middleware, UserController.store);
routes.get('/users/:id', middleware, UserController.showById);


//rotas de endereços
routes.get('/show/:user_id/addresses', middleware, AddressController.show);
routes.post('/users/:user_id/addresses', AddressController.store);

//rotas de tecnologias
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);
routes.get('/users/:user_id/techs', TechController.show);

routes.get('/report', ReportController.show);

module.exports = routes;