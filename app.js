const express = require('express');
const cors = require('cors');
const dbconnect = require('./config');
const ModelPortafolio = require('./portafolio');
const app = express();
const router = express.Router();

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Middleware para manejar solicitudes a favicon.ico
app.use('/favicon.ico', (req, res) => res.status(204).end());

// Rutas
router.post("/", async (req, res) => {
    try {
        const body = req.body;
        const respuesta = await ModelPortafolio.create(body);
        res.send(respuesta);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const respuesta = await ModelPortafolio.find({});
        res.send(respuesta);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelPortafolio.findById(id);
        res.send(respuesta);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const respuesta = await ModelPortafolio.findByIdAndUpdate(id, body, { new: true });
        res.send(respuesta);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelPortafolio.findByIdAndDelete(id);
        res.send(respuesta);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Usar el router
app.use(router);

// Iniciar el servidor localmente
if (process.env.NODE_ENV !== 'production') {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
}

// Conectar a la base de datos
dbconnect();

module.exports = app;
