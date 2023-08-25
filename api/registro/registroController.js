//declaramos variable
const ciudadanosArray = [];

exports.crearCiudadano = (req, res) => {
  const ciudadanoNuevo = req.body;
  ciudadanosArray.push(ciudadanoNuevo);
  res.json({ message: 'Ciudadano creado correctamente' });
};

exports.actualizarCiudadano = (req, res) => {
  const dpi = req.params.dpi;
  const datosActualizados = req.body;

  for (let i = 0; i < ciudadanosArray.length; i++) {
    if (ciudadanosArray[i].DPI === dpi) {
      ciudadanosArray[i] = { ...ciudadanosArray[i], ...datosActualizados };
      return res.json({ message: 'Datos del ciudadano actualizados correctamente' });
    }
  }

  res.status(404).json({ error: 'Ciudadano no encontrado' });
};

exports.eliminarCiudadano = (req, res) => {
  const dpi = req.params.dpi;

  for (let i = 0; i < ciudadanosArray.length; i++) {
    if (ciudadanosArray[i].DPI === dpi) {
      ciudadanosArray.splice(i, 1);
      return res.json({ message: 'Ciudadano eliminado' });
    }
  }

  res.status(404).json({ error: 'Ciudadano no encontrado' });
};

exports.obtenerCiudadano = (req, res) => {
  const dpi = req.params.dpi;

  for (const ciudadano of ciudadanosArray) {
    if (ciudadano.DPI === dpi) {
      return res.json(ciudadano);
    }
  }

  res.status(404).json({ error: 'Ciudadano no encontrado' });
};

exports.obtenerListadociudadanosArray = (req, res) => {
  res.json(ciudadanosArray);
};
