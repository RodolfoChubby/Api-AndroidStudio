const express = require('express');
const cors = require('cors'); // Importar cors
const dbconnect = require('./config');
const ModelPortafolio = require('./portafolio');
const app = express();

const router = express.Router();

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
router.post("/", async (req, res) => {
    const body = req.body;
    const respuesta = await ModelPortafolio.create(body);
    res.send(respuesta);
});

router.get("/", async (req, res) => {
    const respuesta = await ModelPortafolio.find({});
    res.send(respuesta);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelPortafolio.findById(id);
    res.send(respuesta);
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelPortafolio.findByIdAndUpdate(id, body, { new: true });
    res.send(respuesta);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelPortafolio.findByIdAndDelete(id);
    res.send(respuesta);
});

// Usar el router
app.use(router);

// Iniciar el servidor
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// Conectar a la base de datos
dbconnect();
