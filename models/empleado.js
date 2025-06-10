const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String },
    salary: { type: Number }
  },
  {
    timestamps: true,
    versionKey: false // ✅ CORRECTO
  }
);

const ModelEmpleado = mongoose.model('Empleado', empleadoSchema); // ✅ con mayúscula
module.exports = ModelEmpleado;
