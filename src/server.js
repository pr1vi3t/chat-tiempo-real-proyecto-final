const httpServer = require('./app');
const PORT = 3000;
httpServer.listen(PORT,()=>{
    console.log(`La aplicacion esta corriendo en el puerto ${PORT}`)
})