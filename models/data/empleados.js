
import "dotenv/config.js"
import "../../config/database.js"
import Empleado from "../Empleado.js"

let empleados = [
  { nombre: "Empleado 1", cargo: "Gerente", salario: 5000 },
  { nombre: "Empleado 2", cargo: "Vendedor", salario: 3000 },
  { nombre: "Empleado 3", cargo: "Cajero", salario: 2500 },
  { nombre: "Empleado 4", cargo: "Vendedor", salario: 3000 },
  { nombre: "Empleado 5", cargo: "Gerente", salario: 6000 },
  { nombre: "Empleado 6", cargo: "Cajero", salario: 2500 },
  { nombre: "Empleado 7", cargo: "Vendedor", salario: 3000 },
  { nombre: "Empleado 8", cargo: "Vendedor", salario: 3000 },
  { nombre: "Empleado 9", cargo: "Cajero", salario: 2500 },
  { nombre: "Empleado 10", cargo: "Vendedor", salario: 3000 },
  { nombre: "Empleado 11", cargo: "Gerente", salario: 6000 },
  { nombre: "Empleado 12", cargo: "Cajero", salario: 2500 },
  { nombre: "Empleado 13", cargo: "Vendedor", salario: 3000 },
  { nombre: "Empleado 14", cargo: "Cajero", salario: 2500 },
  { nombre: "Empleado 15", cargo: "Vendedor", salario: 3000 },
]

Empleado.insertMany(empleados)