
import "dotenv/config.js"
import "../../config/database.js"
import Tienda from "../Tienda.js"

let tiendas = [
  { nombre: "Tienda A", direccion: "Calle 1, Ciudad", telefono: "123456789" },
  { nombre: "Tienda B", direccion: "Calle 2, Ciudad", telefono: "987654321" },
  { nombre: "Tienda C", direccion: "Calle 3, Ciudad", telefono: "456789123" },
  { nombre: "Tienda D", direccion: "Calle 4, Ciudad", telefono: "321654987" },
  { nombre: "Tienda E", direccion: "Calle 5, Ciudad", telefono: "789123456" },
]

Tienda.insertMany(tiendas)