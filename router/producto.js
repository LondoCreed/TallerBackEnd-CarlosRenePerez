import { Router } from "express"
import { todosLosProductos, productosPorMarca, productosPorPrecio } from "../controllers/producto/read.js"
import { crearProducto, crearProductos } from "../controllers/producto/create.js"


const routerProducto = Router()

routerProducto.get('/todos', todosLosProductos)
routerProducto.get('/marca/:marca', productosPorMarca)
routerProducto.get('/precio/:precio', productosPorPrecio)
routerProducto.post('/crear', crearProducto)
routerProducto.post('/crearVarios', crearProductos)

export { routerProducto }
