const express = require('express');
const router = express.Router();
const registroController = require('./registroController');

router.post('/ciudadanos', registroController.crearCiudadano);
router.put('/ciudadanos/:dpi', registroController.actualizarCiudadano);
router.delete('/ciudadanos/:dpi', registroController.eliminarCiudadano);
router.get('/ciudadanos/:dpi', registroController.obtenerCiudadano);
router.get('/ciudadanos', registroController.obtenerListadoCiudadanos);

module.exports = router;
