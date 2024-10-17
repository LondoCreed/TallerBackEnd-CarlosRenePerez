import Empleado from "../../models/Empleado.js"


let crearEmpleado = async (req, res, next) => {
  try {
    let empleado = req.body
    let all = await Empleado.create(empleado)
    return res.status(201).json({
      message: "Empleado creado exitosamente", 
      response: all 
    })
  } catch (error) { 
    next(error)
  }
}

let crearEmpleados = async (req, res) => {
    try {
      let empleados = req.body
      let all = await Empleado.insertMany(empleados)
      return res.status(201).json({
        message: "Empleados creados exitosamente",
        response: all,
      })
    } catch (error) { 
      next(error)
    }
  }

  
  
  export { crearEmpleado, crearEmpleados }

