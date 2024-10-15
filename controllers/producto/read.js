import Producto from "../../models/Producto.js"

let allProductos = async (req, res) => {
  try {
    let productos = await Producto.find()
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) {
    return res.status(500).json({ 
      response: error.message 
    })
  }
}

let productosByMarca = async (req, res) => {
  try {
    let search = req.params.marca
    let productos = await Producto.find({marca:search})
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) {
    return res.status(500).json({ 
      response: error.message 
    })
  }
}

let productosByPrecio = async (req, res) => {
  try {
    let search = req.params.precio
    let productos = await Producto.find({precio:search})
    return res.status(200).json({ 
      response: productos 
    })
  } catch (error) {
    return res.status(500).json({ 
      response: error.message 
    })
  }
}

export { allProductos, productosByMarca, productosByPrecio }
