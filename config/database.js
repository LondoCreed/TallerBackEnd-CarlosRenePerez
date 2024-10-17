import mongoose from "mongoose"

let url = process.env.URI_MONGO

async function coneccionBaseDeDatos() {

    try {
        await mongoose.connect(url)
        console.log("Base de datos conectada")
    
    }catch(error) {
        console.log(error)
    }
}

coneccionBaseDeDatos()
