const { Router } = require('express');
const router = Router();
const bodyParser = require("body-parser");
const cors=  require("cors")

router.use(
  cors({
    origin: "*"
  })
)
router.use(bodyParser.json());

// Configurar cabeceras y cors
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

const { getCarrosQuitandoCompra, createCarro, updateCarro, deleteCarro,
        getClientes,createCliente,updateCliente, deleteCliente, getCompras, createCompra, deleteCompra, getCarros, getEventos, crearEventos, deleteEvento, getEventosyDueño} = require('../controllers/index.controller');

router.get('/carros', getCarrosQuitandoCompra);
router.get('/carros/venta', getCarros)
router.post('/carros/crear', createCarro);
router.put('/carros/update/:placa', updateCarro)
router.delete('/carros/delete/:placa', deleteCarro);
router.get('/clientes', getClientes);
router.post('/cliente/crear', createCliente);
router.put('/cliente/update/:cedula', updateCliente)
router.delete('/cliente/delete/:cedula', deleteCliente);
router.get('/compras/:id_cliente', getCompras)
router.post('/compras/crear', createCompra)
router.delete('/compras/delete/:id_compra', deleteCompra)
router.get('/vender/eventos', getEventos)
router.post('/vender/eventos/crear', crearEventos)
router.delete('/vender/eventos/delete/:id_evento', deleteEvento )
router.get('/carros/evento/:id_placa', getEventosyDueño)

module.exports = router;