import { Router } from "express"
import { allTiendas, tiendaByNombre, tiendaByDireccion } from "../controllers/tienda/read.js"
import { createTienda, createTiendas } from "../controllers/tienda/create.js"

const routerTienda = Router()

routerTienda.get('/all', allTiendas)
routerTienda.get('/nombre/:nombre', tiendaByNombre)
routerTienda.get('/direccion/:direccion', tiendaByDireccion)
routerTienda.post('/create', createTienda)
routerTienda.post('/createMany', createTiendas)

export { routerTienda }
