
const app = require('./app')
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, ()=> {
    console.log("Serve listen in port: "+PORT);
});