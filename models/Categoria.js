import { Schema, model } from "mongoose";

let collection = 'Categoria';

let schema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true }
}, {
  timestamps: true
});

let Categoria = model(collection, schema);

export default Categoria;
