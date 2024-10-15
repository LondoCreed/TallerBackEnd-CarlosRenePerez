import { Router } from "express"
import { routerTienda } from "./tienda.js"
import { routerProducto } from "./producto.js"
import { routerEmpleado } from "./empleado.js"

const indexRouter = Router()

indexRouter.use('/tiendas', routerTienda)
indexRouter.use('/productos', routerProducto)
indexRouter.use('/empleados', routerEmpleado)

export default indexRouter
