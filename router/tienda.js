import { Router } from "express"
import { todasLasTiendas, tiendaPorNombre, tiendaPorDireccion } from "../controllers/tienda/read.js"
import { crearTienda, crearTiendas } from "../controllers/tienda/create.js"


const routerTienda = Router()

routerTienda.get('/todos', todasLasTiendas)
routerTienda.get('/nombre/:nombre', tiendaPorNombre)
routerTienda.get('/direccion/:direccion', tiendaPorDireccion)
routerTienda.post('/crear', crearTienda)
routerTienda.post('/crearVarios', crearTiendas)

export { routerTienda }
