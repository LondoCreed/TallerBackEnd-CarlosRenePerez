import Producto from "../../models/Producto.js"

let crearProducto = async (req, res) => {
  try {
    let producto = req.body
    let all = await Producto.create(producto)
    return res.status(201).json({
      message: "Producto creado exitosamente", 
      response: all 
    })
  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }
}

let crearProductos = async (req, res) => {
    try {
      let producto = req.body
      let all = await Producto.insertMany(producto)
      return res.status(201).json({
        message: "Productos creados exitosamente",
        response: all,
      })
    } catch (error) { 
      next(error) //maneja el error 500 con el middleware error_handler
    }
  }
  
  export { crearProducto, crearProductos }