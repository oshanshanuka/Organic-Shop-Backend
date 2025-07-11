"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1.Initialize the express app
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//2.Define the application port
const port = 3000;
//3.define a simple http get request
app.get('/', (req, res) => {
    res.send("Hello!");
});
//4.Instruts the express app to listen on port 300
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
