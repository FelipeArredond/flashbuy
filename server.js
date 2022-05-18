const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleWare = jsonServer.defaults({
    static: "./build"
})

const port = process.env.PORT || 6000;
server.use(middleWare);
server.use(
    jsonServer.rewriter({
        "/api/*":"/$1",
    })
)

server.use(router);
server.listen(port,() => {
    console.log(`Serever running on port ${port}`)
})