import { Router } from "express"
import { verLosInventarios, inventarioTiendas, inventarioProductos } from "../controllers/inventario/read.js"
import { crearInventario, crearInventarios } from "../controllers/inventario/create.js"

const routerInventario = Router()


routerInventario.get('/todos', verLosInventarios)
routerInventario.get('/tienda/:tienda', inventarioTiendas)
routerInventario.get('/producto/:producto', inventarioProductos)
routerInventario.post('/crear', crearInventario)
routerInventario.post('/crearVarios', crearInventarios)

export { routerInventario }
