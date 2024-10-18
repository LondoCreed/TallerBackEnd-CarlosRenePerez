import "dotenv/config.js"
import "../../config/database.js"
import Categoria from "../Categoria.js"

let categorias = [
    {
      nombre: "Electrónica",
      descripcion: "Dispositivos electrónicos y gadgets."
    },
    {
      nombre: "Hogar",
      descripcion: "Productos para el hogar y cocina."
    },
    {
      nombre: "Ropa",
      descripcion: "Vestimenta para hombres, mujeres y niños."
    },
    {
      nombre: "Deportes",
      descripcion: "Equipo y ropa deportiva."
    },
    {
      nombre: "Libros",
      descripcion: "Libros, revistas y material de lectura."
    }
  ];
  

Categoria.insertMany(categorias)