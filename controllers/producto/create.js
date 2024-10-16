import Producto from "../../models/Producto.js"

let createProducto = async (req, res) => {
  try {
    let producto = req.body
    let all = await Producto.create(producto)
    return res.status(201).json({
      message: "Producto creado exitosamente", 
      response: all 
    })
  } catch (error) {
    return res.status(500).json({ 
      message: "Error al crear producto",
      response: error
    })
  }
}

let createProductos = async (req, res) => {
    try {
      let producto = req.body
      let all = await Producto.insertMany(producto)
      return res.status(201).json({
        message: "Productos creados exitosamente",
        response: all,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear los productos",
        response: error,
      })
    }
  }
  
  export { createProducto, createProductos }