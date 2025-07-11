import app from "./app";
import dotenv from "dotenv";

dotenv.config(); //load the all enviroments variable

//1.Initialize the express app
// import express, {Express,Request,Response} from 'express';
// const app: Express = express();

//2.Define the application port
const port= process.env.PORT || 3000; // access the port(3000 kyl denne .env eke port ekk nththn 3000 kyl gnna

// //3.define a simple http get request
// app.get('/',(req:Request, res:Response) => {
//     res.send("Hello world adppppp!");
// });

//4.Instruts the express app to listen on port 300
app.listen(port,() => {
   console.log(`server is running at http://localhost:${port}`)
});