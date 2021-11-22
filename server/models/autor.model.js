const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema(
  {nombre: {
         type: String,
          minlength: [3, "El nombre debe tener al menos 3 caracteres"],
          required: [true, "El nombre es requerido"],
         }
  },
  { timestamps: true }
);

module.exports.Autor = mongoose.model("Autor", AutorSchema, 'autores');
//se coloca el tercer argumento para indicar el nomre de la coleccion en la base de datos
