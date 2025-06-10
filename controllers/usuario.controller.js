const ModelUser = require('../models/model');
const usuarioCtrl = {};

// Crear usuario
usuarioCtrl.createUser = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.status(201).json(respuesta);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear usuario', error });
  }
};

// Consultar todos los usuarios
usuarioCtrl.getUsers = async (req, res) => {
  try {
    const respuesta = await ModelUser.find({});
    res.json(respuesta);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

// Consultar usuario por ID
usuarioCtrl.getUniqueUser = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({ _id: id });
    res.json(respuesta);
  } catch (error) {
    res.status(404).json({ message: 'Usuario no encontrado', error });
  }
};

// Actualizar usuario
usuarioCtrl.editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelUser.findByIdAndUpdate({ _id: id }, body, { new: true });
    res.json(respuesta);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar usuario', error });
  }
};

// Eliminar usuario
usuarioCtrl.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({ _id: id });
    res.json({ message: 'Usuario eliminado', data: respuesta });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar usuario', error });
  }
};

module.exports = usuarioCtrl;