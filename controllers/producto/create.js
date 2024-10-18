import Producto from "../../models/Producto.js"

let crearProducto = async (req, res, next) => {
  try {
    let producto = req.body
    let crear = await Producto.create(producto)
    return res.status(201).json({
      message: "Producto creado exitosamente", 
      response: crear 
    })
  } catch (error) { 
    next(error) 
  }
}

let crearProductos = async (req, res, next) => {
    try {
      let producto = req.body
      let crearVarios = await Producto.insertMany(producto)
      return res.status(201).json({
        message: "Productos creados exitosamente",
        response: crearVarios,
      })
    } catch (error) { 
      next(error) 
    }
  }
  
  export { crearProducto, crearProductos }