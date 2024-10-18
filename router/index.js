import { Router } from "express"
import { routerTienda } from "./tienda.js"
import { routerProducto } from "./producto.js"
import { routerEmpleado } from "./empleado.js"
import {routerCategoria} from "./categoria.js"
import { routerInventario } from "./inventario.js"

const indexRouter = Router()

indexRouter.use('/tiendas', routerTienda)
indexRouter.use('/productos', routerProducto)
indexRouter.use('/empleados', routerEmpleado)
indexRouter.use('/categorias', routerCategoria)
indexRouter.use('/inventarios', routerInventario)

export default indexRouter
