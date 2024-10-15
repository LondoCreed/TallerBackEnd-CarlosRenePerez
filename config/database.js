import mongoose from "mongoose"

let url = process.env.URI_MONGO

async function coneccionBaseDeDatos() {

    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("base conectada")
    
    }catch(error) {
        console.log(error)
    }
}

coneccionBaseDeDatos()
