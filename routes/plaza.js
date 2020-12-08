var express = require('express');

var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/EquipoEsport');
require('../models/Equipo');
require('../models/Esport');
const EquipoEsport=mongoose.model('EquipoEsport');
const Esport=mongoose.model('Esport');
const Equipo=mongoose.model('Equipo');

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
   var registro=new EquipoEsport(req.body);
    
  
    Esport.findById(req.body.IdEsport).then((esports)=>{
      if(esports==null ){
      res.send("No existe el registro del esport");
    }else{
      const esport=esports;
      
   registro.IdEsport=esport;

    }
    });
    Equipo.findById(req.body.IdEquipo).then((equipos)=>{
      if(equipos==null){
        res.send("No existe el registro del equipo");
      }else{
      const equipo=equipos;
       
    registro.IdEsport=equipo;
   
      }
     });
 

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

