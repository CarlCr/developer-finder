const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SeachController = require('./controllers/SearchController')
const routes = Router()

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registo)

routes.get('/devs', DevController.index)

routes.get('/search', SeachController.index)

routes.post('/devs', DevController.store)

module.exports = routes