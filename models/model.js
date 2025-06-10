const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
  {
    nomuser: { type: String },
    password: { type: String }
  },
  {
    timestamps: true,
    versionKey: false, // ✅ CORRECTO
  }
);

const ModelUser = mongoose.model('Usuario', userModel); // ✅ singular con mayúscula
module.exports = ModelUser;