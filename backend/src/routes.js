// Metodos HTTP get, post, put, delete

// Tipos de parametros: request.query(Filtros, ordenação, Paginaçao,...)
// Query Params: request.params (indentifica um recurso na alteraçao iu remoção)
// Rout Params:
//body: request.body (dados para criaçao ou alterçao dos registros)

// MongoDB (Não-relacional)
const {Router} = require('express');
const axios = require('axios'); 
const routes = Router();
const Dev = require('./models/Dev');

routes.post('/devs', async (request,response) => {
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); 

    const { name = login, avatar_url, bio } = apiResponse.data;

   const techsArray = techs.split(','.localeCompare(tech => tech.trim()));

   const dev = await Dev.create({
        github_username: github_username,
        name: name,
        avatar_url: avatar_url,
        bio: bio,
        techs: techsArray,
   })
    return response.json(dev); 
});

module.exports = routes;