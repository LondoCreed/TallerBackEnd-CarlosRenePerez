import Tienda from "../../models/Tienda.js"

let crearTienda = async (req, res) => {
  try {
    let tienda = req.body
    let all = await Tienda.create(tienda)
    return res.status(201).json({
      message: "Tienda creada exitosamente", 
      response: all 
    })
  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }
}

let crearTiendas = async (req, res) => {
    try {
      let tienda = req.body
      let all = await Tienda.insertMany(tienda)
      return res.status(201).json({
        message: "Tiendas creadas exitosamente",
        response: all,
      })
    } catch (error) { 
      next(error)
    }
  }
  
  export { crearTienda, crearTiendas }