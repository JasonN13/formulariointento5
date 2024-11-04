import express from "express";
import { Personas } from "./Router/routerRegistro.js";
import cors from 'cors'

const app = express ();

app.use(cors());
app.use(express.json());
app.use('/Registro',Personas);

app.listen(3000,()=>{
    console.log("iniciando en el puerto 3000")
});