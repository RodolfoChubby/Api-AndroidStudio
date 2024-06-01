const mongoose = require('mongoose');
const portafolioSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    correo: {
        type: String
    },
    mensaje: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
});

const ModelPortafolio = mongoose.model('portafolios', portafolioSchema);
module.exports = ModelPortafolio;