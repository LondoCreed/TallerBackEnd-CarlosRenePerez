import Categoria from "../../models/Categoria.js"

let todasLasCategorias = async (req, res, next) => {
  try {
    let categorias = await Categoria.find()
    return res.status(200).json({ 
      response: categorias 
    })
  } catch (error) { 
    next(error)
  }
}

let categoriasPorID = async (req, res, next) => {
  try {
    let catId = req.params.id
    let categoria = await Categoria.findById(catId)
    return res.status(200).json({ 
      response: categoria 
    })
  } catch (error) { 
    next(error)
  }
}

let categoriaPorNombre = async (req, res, next) => {
  try {
    let nombre = req.params.nombre
    let categoria = await Categoria.find({ nombre: nombre })
    return res.status(200).json({ 
      response: categoria 
    })
  } catch (error) { 
    next(error)
  }
}

export { todasLasCategorias, categoriasPorID, categoriaPorNombre };
