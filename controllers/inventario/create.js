import Inventario from "../../models/Inventario.js"


let crearInventario = async (req, res, next) => {
  try {
    let inventario = req.body
    let crear = await Inventario.create(inventario)
    return res.status(201).json({
      message: "Inventario creado exitosamente", 
      response: crear 
    })
  } catch (error) { 
    next(error)
  }
}

let crearInventarios = async (req, res, next) => {
    try {
      let inventario = req.body
      let crearVarios = await Inventario.insertMany(inventario)
      return res.status(201).json({
        message: "Inventarios creados exitosamente",
        response: crearVarios,
      })
    } catch (error) { 
      next(error)
    }
  }

  
  
  export { crearInventario, crearInventarios }