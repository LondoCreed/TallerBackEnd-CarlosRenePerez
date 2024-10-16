import Empleado from "../../models/Empleado.js"

let createEmpleado = async (req, res) => {
  try {
    let empleado = req.body
    let all = await Empleado.create(empleado)
    return res.status(201).json({
      message: "Empleado creado exitosamente", 
      response: all 
    })
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al crear empleado",
      response: error
    })
  }
}

let createEmpleados = async (req, res) => {
    try {
      let empleados = req.body
      let all = await Empleado.insertMany(empleados)
      return res.status(201).json({
        message: "Empleados creados exitosamente",
        response: all,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear los empleados",
        response: error,
      })
    }
  }
  
  export { createEmpleado, createEmpleados }

