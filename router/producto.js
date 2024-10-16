import { Router } from "express"
import { allProductos,productosByMarca, productosByPrecio } from "../controllers/producto/read.js";
import { createProducto, createProductos } from "../controllers/producto/create.js";

const routerProducto = Router()

routerProducto.get('/all', allProductos)
routerProducto.get('/marca/:marca', productosByMarca)
routerProducto.get('/precio/:precio', productosByPrecio)
routerProducto.post('/create', createProducto)
routerProducto.post('/createMany', createProductos)

export { routerProducto }
