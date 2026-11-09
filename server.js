const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// La nube inyectará su propio puerto, si no, usa el 3000
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`SkateShop API corriendo en el puerto ${port}`);
});