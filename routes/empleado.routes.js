const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

router.get('/', empleadoCtrl.getEmpleado);  // Aquí está el cambio
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getUniqueEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

// 🔧 Ruta de prueba
router.post('/prueba', (req, res) => {
  res.send('Ruta de prueba funcionando');
});

module.exports = router;
