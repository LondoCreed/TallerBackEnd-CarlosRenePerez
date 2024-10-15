import Empleado from "../../models/Empleado.js"

let allEmpleados = async (req, res) => {
  try {
    let empleados = await Empleado.find()
    return res.status(200).json({ 
      response: empleados 
    })
  } catch (error) {
    return res.status(500).json({ 
      response: error
    })
  }
}

let empleadosByCargo = async (req, res) => {
  try {
    let x = req.params.cargo
    let empleados = await Empleado.find({cargo:x})
    return res.status(200).json({ 
      response: empleados 
    })

  }catch (error) {
    return res.status(500).json({ 
      response: error
    })
  }

}

let empleadosBySalario = async (req, res) => {
  try {
    let y = req.params.salario
    let empleados = await Empleado.find({salario:y})
    return res.status(200).json({ 
      response: empleados 
    })

  }catch (error) {
    return res.status(500).json({ 
      response: error
    })
  }

}



export { allEmpleados, empleadosByCargo, empleadosBySalario }
