import Tienda from "../../models/Tienda.js"

let todasLasTiendas = async (req, res) => {
  try {
    let tiendas = await Tienda.find();
    return res.status(200).json({
       response: tiendas 
      })
    } catch (error) { 
      next(error)
    }
}

let tiendaPorNombre = async (req, res) => {
  try {
    let search = req.params.nombre
    let tienda = await Tienda.find({ nombre:search })
    return res.status(200).json({ 
      response: tienda 
    })
  } catch (error) { 
    next(error) 
  }
}

let tiendaPorDireccion = async (req, res) => {
  try {
    let search = req.params.direccion
    let tienda = await Tienda.find({direccion: search})
    return res.status(200).json({
       response: tienda 
      })
    } catch (error) { 
      next(error)
    }
}

export { todasLasTiendas, tiendaPorNombre, tiendaPorDireccion };
