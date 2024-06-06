const mongoose = require('mongoose');

async function dbconnect() {
  try {
    await mongoose.connect('mongodb+srv://rodo-portafolio:Pandas09.@portafolio.9muuxs2.mongodb.net/?retryWrites=true&w=majority&appName=Portafolio');
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error al conectar a la base de datos', err);
  }
}

module.exports = dbconnect;
