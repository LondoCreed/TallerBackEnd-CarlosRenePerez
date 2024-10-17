import { Router } from "express"
import { todosLosEmpleados, empleadosPorCargo, empleadosPorSalario } from "../controllers/empleado/read.js"
import {crearEmpleado,crearEmpleados } from "../controllers/empleado/create.js"
import {bad_request_handler_E} from '../middlewares/bad_request_handler.js'


const routerEmpleado = Router()



routerEmpleado.get('/todos', todosLosEmpleados)
routerEmpleado.get('/cargo/:cargo', empleadosPorCargo)
routerEmpleado.get('/salario/:salario', empleadosPorSalario)
routerEmpleado.post('/crear', bad_request_handler_E, crearEmpleado)
routerEmpleado.post('/crearVarios', bad_request_handler_E, crearEmpleados)


export { routerEmpleado }
