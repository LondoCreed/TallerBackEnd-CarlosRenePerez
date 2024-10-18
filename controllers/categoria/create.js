import Categoria from "../../models/Categoria.js"


let crearCategoria = async (req, res, next) => {
  try {
    let categoria = req.body
    let crear = await Categoria.create(categoria)
    return res.status(201).json({
      message: "Categoria creada exitosamente", 
      response: crear 
    })
  } catch (error) { 
    next(error)
  }
}

let crearCategorias = async (req, res, next) => {
    try {
      let categorias = req.body
      let crearVarios = await Categoria.insertMany(categorias)
      return res.status(201).json({
        message: "Categorias creadas exitosamente",
        response: crearVarios,
      })
    } catch (error) { 
      next(error)
    }
  }

  
  
  export { crearCategoria, crearCategorias }