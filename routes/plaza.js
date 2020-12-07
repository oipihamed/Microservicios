var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/EquipoEsport');
const EquipoEsport=mongoose.model('EquipoEsport');

 //Registro de datos
 router.post('/',(req, res)=> {
   //res.json(req.body);
   var newPlaza={
    IdEquipo:req.body.IdEquipo,
    IdEsport:req.body.IdEsport,
    Posicion:req.body.Posicion,
    Disponible:req.body.Disponible
   }
  //ESTUDIANTE ES EL MODELO Y LE PASAMOS LOS DATOS
   var registro=new EquipoEsport(newPlaza);
   registro.save().then(()=>{
     console.log("Se ha matriculado");
     res.send("Se ha registrado exitosamente");
   }).catch((error)=>{
     if(error){
       console.log("Un error ha ocurrido al realizar la matriculacion");
       throw error;
     }
   });
 });
 router.get('/',(req, res)=> {
  //res.send('Metodo que lista los Jugadors');
  EquipoEsport.find().then((plazas)=>{
     res.json(plazas);
   }).catch((error)=>{
     if(error)
     throw error;
   });
 });
 

 module.exports = router;

