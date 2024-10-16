import { Router } from "express"
import { allEmpleados, empleadosByCargo, empleadosBySalario } from "../controllers/empleado/read.js"
import {createEmpleado,createEmpleados } from "../controllers/empleado/create.js"

const routerEmpleado = Router()

routerEmpleado.get('/all', allEmpleados)
routerEmpleado.get('/cargo/:cargo', empleadosByCargo)
routerEmpleado.get('/salario/:salario', empleadosBySalario)
routerEmpleado.post('/create', createEmpleado)
routerEmpleado.post('/createMany', createEmpleados)

export { routerEmpleado }
