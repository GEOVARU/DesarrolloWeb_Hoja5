const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const registroRoutes = require('./api/registro/routes');
app.use('/api/registro', registroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
