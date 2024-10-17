import { Router } from "express"
import { todosLosProductos, productosPorMarca, productosPorPrecio } from "../controllers/producto/read.js"
import { crearProducto, crearProductos } from "../controllers/producto/create.js"
import { bad_request_handler_P } from "../middlewares/bad_request_handler.js"

const routerProducto = Router()

routerProducto.get('/todos', todosLosProductos)
routerProducto.get('/marca/:marca', productosPorMarca)
routerProducto.get('/precio/:precio', productosPorPrecio)
routerProducto.post('/crear', bad_request_handler_P, crearProducto)
routerProducto.post('/crearVarios', bad_request_handler_P, crearProductos)

export { routerProducto }
