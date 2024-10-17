import Producto from "../../models/Producto.js"

let todosLosProductos = async (req, res) => {
  try {
    let productos = await Producto.find()
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) { 
    next(error)
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
    next(error) 
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
    next(error) 
  }
}

export { todosLosProductos, productosPorMarca, productosPorPrecio }
