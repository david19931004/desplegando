const ModelEmpleado = require('../models/empleado');
const empleadoCtrl = {};

// Crear empleado
empleadoCtrl.createEmpleado = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body);
    res.status(201).json(respuesta);
  } catch (error) {
    console.error("❌ Error real en createEmpleado:", error);
    res.status(400).json({
      message: 'Error al crear empleado',
      error: error.message || "Error desconocido"
    });
  }
};

// Consultar todos los empleados
empleadoCtrl.getEmpleado = async (req, res) => {
  try {
    const respuesta = await ModelEmpleado.find({});
    res.json(respuesta);
  } catch (error) {
    console.error("❌ Error real en getEmpleado:", error);
    res.status(500).json({
      message: 'Error al obtener empleado',
      error: error.message || "Error desconocido"
    });
  }
};

// Consultar empleado por ID
empleadoCtrl.getUniqueEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById(id);
    if (!respuesta) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(respuesta);
  } catch (error) {
    console.error("❌ Error real en getUniqueEmpleado:", error);
    res.status(404).json({
      message: 'Empleado no encontrado',
      error: error.message || "Error desconocido"
    });
  }
};

// Actualizar empleado
empleadoCtrl.editEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelEmpleado.findByIdAndUpdate(id, body, { new: true });
    if (!respuesta) return res.status(404).json({ message: 'Empleado no encontrado para actualizar' });
    res.json(respuesta);
  } catch (error) {
    console.error("❌ Error real en editEmpleado:", error);
    res.status(400).json({
      message: 'Error al actualizar empleado',
      error: error.message || "Error desconocido"
    });
  }
};

// Eliminar empleado
empleadoCtrl.deleteEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndDelete(id);
    if (!respuesta) return res.status(404).json({ message: 'Empleado no encontrado para eliminar' });
    res.json({ message: 'Empleado eliminado', data: respuesta });
  } catch (error) {
    console.error("❌ Error real en deleteEmpleado:", error);
    res.status(400).json({
      message: 'Error al eliminar empleado',
      error: error.message || "Error desconocido"
    });
  }
};

module.exports = empleadoCtrl;

