import express from 'express'
const Personas = express();

import {getRegistrousuarios,postRegistro,putRegistro,deleteRegistrousuarios } from '../controller/controllerRegistro.js';


Personas.get('/Consulta',getRegistrousuarios);

Personas.post('/Nuevo',postRegistro)

Personas.put('/NRegistro',putRegistro)

Personas.delete('/:id',deleteRegistrousuarios)

export{Personas}