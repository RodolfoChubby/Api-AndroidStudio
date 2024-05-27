const mongoose = require('mongoose');

async function dbconnect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/portafolios_prueba', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error al conectar a la base de datos', err);
  }
}

module.exports = dbconnect;