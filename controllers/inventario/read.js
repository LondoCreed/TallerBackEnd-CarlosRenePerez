import Inventario from "../../models/Inventario.js"

let verLosInventarios = async (req, res, next) => {
  try {
    let inventarios = await Inventario.find()
    return res.status(200).json({ 
      response: inventarios 
    })
  } catch (error) { 
    next(error)
  }
}

let inventarioTiendas = async (req, res, next) => {
    try {
      let tiendaId = req.params.tienda
      let tiendaRes = await Inventario.find({ tienda: tiendaId })
      return res.status(200).json({ 
        response: tiendaRes 
      })
    } catch (error) { 
      next(error)
    }
  }

let inventarioProductos = async (req, res, next) => {
  try {
    let productoId = req.params.producto
    let categoria = await Inventario.find({ producto: productoId })
    return res.status(200).json({ 
      response: categoria 
    })
  } catch (error) { 
    next(error)
  }
}

export { verLosInventarios, inventarioTiendas, inventarioProductos }
