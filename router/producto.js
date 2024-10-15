import { Router } from "express"
import { allProductos,productosByMarca, productosByPrecio } from "../controllers/producto/read.js";

const routerProducto = Router()

routerProducto.get('/all', allProductos)
routerProducto.get('/marca/:marca', productosByMarca)
routerProducto.get('/precio/:precio', productosByPrecio)

export { routerProducto }
