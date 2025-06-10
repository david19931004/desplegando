const express = require('express');
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/empleado', require('./routes/empleado.routes'));

app.post('/debug', (req, res) => {
  console.log('POST /debug recibido');
  res.send('Ruta debug funcionando');
});

app.listen(3008, () => {
  console.log('Servidor test corriendo en puerto 3008');
});
