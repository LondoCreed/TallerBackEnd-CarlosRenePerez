import Tienda from "../../models/Tienda.js"

let createTienda = async (req, res) => {
  try {
    let tienda = req.body
    let all = await Tienda.create(tienda)
    return res.status(201).json({
      message: "Tienda creada exitosamente", 
      response: all 
    })
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al crear la tienda",
      response: error
    })
  }
}

let createTiendas = async (req, res) => {
    try {
      let tienda = req.body
      let all = await Tienda.insertMany(tienda)
      return res.status(201).json({
        message: "Tiendas creadas exitosamente",
        response: all,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear las tiendas",
        response: error,
      })
    }
  }
  
  export { createTienda, createTiendas }