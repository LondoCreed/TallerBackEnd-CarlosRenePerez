import { Schema, model } from "mongoose";

let collection = 'Inventario';

let schema = new Schema({
  tienda: { type: Schema.Types.ObjectId, ref: 'Tienda', required: true },
  producto: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true }
}, {
  timestamps: true
});

let Inventario = model(collection, schema);

export default Inventario;
