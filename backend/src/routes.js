// Metodos HTTP get, post, put, delete

// Tipos de parametros: request.query(Filtros, ordenação, Paginaçao,...)
// Query Params: request.params (indentifica um recurso na alteraçao iu remoção)
// Rout Params:
//body: request.body (dados para criaçao ou alterçao dos registros)

// MongoDB (Não-relacional)
const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.post('/devs', DevController.store);

module.exports = routes;