import "dotenv/config.js"
import "../../config/database.js"
import Inventario from "../Inventario.js"

let inventarios = [
    {
      tienda: "64bdc198f59b5e001e2a3e5f", // ID de una tienda
      producto: "64bdc198f59b5e001e2a3e8b", // ID de un producto
      cantidad: 50
    },
    {
      tienda: "64bdc198f59b5e001e2a3e60", // ID de otra tienda
      producto: "64bdc198f59b5e001e2a3e8c", // ID de otro producto
      cantidad: 20
    },
    {
      tienda: "64bdc198f59b5e001e2a3e5f",
      producto: "64bdc198f59b5e001e2a3e8d",
      cantidad: 100
    },
    {
      tienda: "64bdc198f59b5e001e2a3e60",
      producto: "64bdc198f59b5e001e2a3e8e",
      cantidad: 75
    },
    {
      tienda: "64bdc198f59b5e001e2a3e5f",
      producto: "64bdc198f59b5e001e2a3e8f",
      cantidad: 30
    }
  ];
  
  

Inventario.insertMany(inventarios)