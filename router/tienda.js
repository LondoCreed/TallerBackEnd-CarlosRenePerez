import { Router } from "express"
import { allTiendas, tiendaByNombre, tiendaByDireccion } from "../controllers/tienda/read.js"

const routerTienda = Router()

routerTienda.get('/all', allTiendas)
routerTienda.get('/nombre/:nombre', tiendaByNombre)
routerTienda.get('/direccion/:direccion', tiendaByDireccion)

export { routerTienda }
