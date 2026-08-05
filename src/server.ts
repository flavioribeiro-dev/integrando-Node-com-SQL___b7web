import Express from "express";
import "dotenv/config";
import router from "./router.js";

const server = Express();

server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`resvidor rodando na porta ${process.env.PORT}`)
})