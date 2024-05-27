const mongoose = require('mongoose');
const portafolioSchema = new mongoose.Schema({
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