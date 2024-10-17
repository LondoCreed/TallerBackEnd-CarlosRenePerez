import Empleado from "../../models/Empleado.js"

let todosLosEmpleados = async (req, res) => {
  try {
    let empleados = await Empleado.find()
    return res.status(200).json({ 
      response: empleados 
    })
  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }
}

let empleadosPorCargo = async (req, res) => {
  try {
    let x = req.params.cargo
    let empleados = await Empleado.find({cargo:x})
    return res.status(200).json({ 
      response: empleados 
    })

  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }

}

let empleadosPorSalario = async (req, res) => {
  try {
    let y = req.params.salario
    let empleados = await Empleado.find({salario:y})
    return res.status(200).json({ 
      response: empleados 
    })

  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }

}



export { todosLosEmpleados, empleadosPorCargo, empleadosPorSalario }
