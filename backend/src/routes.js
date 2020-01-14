const {Router} = require('express');

const routes = Router();

// Metodos HTTP get, post, put, delete

// Tipos de parametros: request.query(Filtros, ordenação, Paginaçao,...)
// Query Params: request.params (indentifica um recurso na alteraçao iu remoção)
// Rout Params:
//body: request.body (dados para criaçao ou alterçao dos registros)

// MongoDB (Não-relacional)

routes.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStak' }); 
});

module.exports = routes;