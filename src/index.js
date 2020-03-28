"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello Heroku\n");
});
server.listen(process.env.PORT);
