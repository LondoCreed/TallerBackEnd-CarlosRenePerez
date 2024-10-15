import Tienda from "../../models/Tienda.js"

let allTiendas = async (req, res) => {
  try {
    let tiendas = await Tienda.find();
    return res.status(200).json({
       response: tiendas 
      })
  } catch (error) {
    return res.status(500).json({
      response: error.message 
    })
  }
}

let tiendaByNombre = async (req, res) => {
  try {
    let search = req.params.nombre
    let tienda = await Tienda.find({ nombre:search })
    return res.status(200).json({ 
      response: tienda 
    })
  } catch (error) {
    return res.status(500).json({ 
      response: error 
    })
  }
}

let tiendaByDireccion = async (req, res) => {
  try {
    let search = req.params.direccion
    let tienda = await Tienda.find({direccion: search})
    return res.status(200).json({
       response: tienda 
      })
  } catch (error) {
    return res.status(500).json({
       response: error
       })
  }
}

export { allTiendas, tiendaByNombre, tiendaByDireccion };
