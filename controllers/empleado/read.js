import Empleado from "../../models/Empleado.js"

let todosLosEmpleados = async (req, res, next) => {
  try {
    let empleados = await Empleado.find()
    return res.status(200).json({ 
      response: empleados 
    })
  } catch (error) { 
    next(error)
  }
}

let empleadosPorCargo = async (req, res, next) => {
  try {
    let x = req.params.cargo
    let empleados = await Empleado.find({cargo:x})
    return res.status(200).json({ 
      response: empleados 
    })

  } catch (error) { 
    next(error) 
  }

}

let empleadosPorSalario = async (req, res, next) => {
  try {
    let y = req.params.salario
    let empleados = await Empleado.find({salario:y})
    return res.status(200).json({ 
      response: empleados 
    })

  } catch (error) { 
    next(error) 
  }

}



export { todosLosEmpleados, empleadosPorCargo, empleadosPorSalario }
