import Express from "express";
import "dotenv/config";
import router from "./router.js";

const server = Express();

server.use(router);
server.use(Express.urlencoded({ extended: true }));
server.use(Express.json);

server.listen(3000, () => {
    console.log(`resvidor rodando na porta ${process.env.PORT}`)
})