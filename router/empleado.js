import { Router } from "express"
import { allEmpleados, empleadosByCargo, empleadosBySalario } from "../controllers/empleado/read.js"

const routerEmpleado = Router()

routerEmpleado.get('/all', allEmpleados)
routerEmpleado.get('/cargo/:cargo', empleadosByCargo)
routerEmpleado.get('/salario/:salario', empleadosBySalario)

export { routerEmpleado }
