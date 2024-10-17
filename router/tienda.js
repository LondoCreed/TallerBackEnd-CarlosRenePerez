import { Router } from "express"
import { todasLasTiendas, tiendaPorNombre, tiendaPorDireccion } from "../controllers/tienda/read.js"
import { crearTienda, crearTiendas } from "../controllers/tienda/create.js"
import { bad_request_handler_T } from "../middlewares/bad_request_handler.js"

const routerTienda = Router()

routerTienda.get('/todos', todasLasTiendas)
routerTienda.get('/nombre/:nombre', tiendaPorNombre)
routerTienda.get('/direccion/:direccion', tiendaPorDireccion)
routerTienda.post('/crear', bad_request_handler_T, crearTienda)
routerTienda.post('/crearVarios', bad_request_handler_T, crearTiendas)

export { routerTienda }
