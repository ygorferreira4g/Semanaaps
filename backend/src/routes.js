// Metodos HTTP get, post, put, delete

// Tipos de parametros: request.query(Filtros, ordenação, Paginaçao,...)
// Query Params: request.params (indentifica um recurso na alteraçao iu remoção)
// Rout Params:
//body: request.body (dados para criaçao ou alterçao dos registros)

// MongoDB (Não-relacional)
const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;