
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./app/routes/employe.routes.js";
 
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
  
app.listen(PORT, () => console.log('http://localhost:8080'))