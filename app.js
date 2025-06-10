const express = require('express');
const cors = require('cors');
const dbconnect = require('./config');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

// Ruta debug temporal para probar si el servidor recibe POST
app.post('/debug', (req, res) => {
  const { nomuser, password } = req.body;

  console.log('******** NUEVO DEBUG ACTIVO ********');
  console.log('Nomuser:', nomuser);
  console.log('Password:', password);

  if (!nomuser || !password) {
    return res.status(400).send('Faltan nomuser o password');
  }

  res.send(`✅ Recibido: ${nomuser}`);
});

app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/empleados', require('./routes/empleado.routes')); // ✅ ahora en plural

app.listen(3005, () => {
  console.log('Server is running on port 3005'); // ✅ corregido
});

dbconnect();


