import express from "express";
import productRouter from "./routers/productRouter.js";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

server.use(productRouter);

server.listen(5000, ()=>{
    console.log("O server está no ar!");
})