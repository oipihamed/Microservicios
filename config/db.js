const mongoose = require("mongoose");
 
// Copia la URL del sitio de mongo DB
const MONGOURI = "mongodb+srv://test:test@cluster0.qweoe.mongodb.net/Microservicios?retryWrites=true&w=majority";
 
const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la BD !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 
module.exports = InitiateMongoServer;
