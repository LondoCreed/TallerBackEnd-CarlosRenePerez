import Producto from "../../models/Producto.js"

let todosLosProductos = async (req, res) => {
  try {
    let productos = await Producto.find()
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }
}

let productosPorMarca = async (req, res) => {
  try {
    let search = req.params.marca
    let productos = await Producto.find({marca:search})
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }
}

let productosPorPrecio = async (req, res) => {
  try {
    let search = req.params.precio
    let productos = await Producto.find({precio:search})
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) { 
    next(error) //maneja el error 500 con el middleware error_handler
  }
}

export { todosLosProductos, productosPorMarca, productosPorPrecio }
