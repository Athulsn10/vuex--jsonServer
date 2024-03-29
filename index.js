const jsonServer = require('json-server');
require('dotenv').config();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT  || 3000 ;

server.use(middlewares);
server.use(router);

server.listen(port,()=>{
    console.log(`server in running on  ${port} succesfully`);
})

