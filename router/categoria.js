import { Router } from "express"
import { todasLasCategorias, categoriasPorID, categoriaPorNombre } from "../controllers/categoria/read.js"
import {crearCategoria, crearCategorias } from "../controllers/categoria/create.js"



const routerCategoria = Router()



routerCategoria.get('/todos', todasLasCategorias)
routerCategoria.get('/id/:id', categoriasPorID)
routerCategoria.get('/nombre/:nombre', categoriaPorNombre)
routerCategoria.post('/crear', crearCategoria)
routerCategoria.post('/crearVarios', crearCategorias)


export { routerCategoria}
