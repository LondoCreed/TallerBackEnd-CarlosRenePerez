import { Router } from "express"
import { todosLosEmpleados, empleadosPorCargo, empleadosPorSalario } from "../controllers/empleado/read.js"
import {crearEmpleado,crearEmpleados } from "../controllers/empleado/create.js"



const routerEmpleado = Router()



routerEmpleado.get('/todos', todosLosEmpleados)
routerEmpleado.get('/cargo/:cargo', empleadosPorCargo)
routerEmpleado.get('/salario/:salario', empleadosPorSalario)
routerEmpleado.post('/crear', crearEmpleado)
routerEmpleado.post('/crearVarios', crearEmpleados)


export { routerEmpleado }
