var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/EstudianteCurso');
const EstudianteCurso=mongoose.model('EstudianteCurso');

 //Registro de datos
 router.post('/',(req, res)=> {
   //res.json(req.body);
   var newInscripcion={
    NumeroControl:req.body.NumeroControl,
    CursoNo:req.body.CursoNo,
    Puntuacion:req.body.Puntuacion,
    Terminmado:req.body.Terminmado
   }
  //ESTUDIANTE ES EL MODELO Y LE PASAMOS LOS DATOS
   var maticrulacion=new EstudianteCurso(newInscripcion);
   maticrulacion.save().then(()=>{
     console.log("Se ha matriculado");
     res.send("Se ha matriculado exitosamente");
   }).catch((error)=>{
     if(error){
       console.log("Un error ha ocurrido al realizar la matriculacion");
       throw error;
     }
   });
 });


 module.exports = router;

