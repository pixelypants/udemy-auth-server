import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on port: ", port)


// https://developer.okta.com/blog/2018/11/15/node-express-typescript