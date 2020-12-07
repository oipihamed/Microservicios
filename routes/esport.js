var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Esport');
const Esport=mongoose.model('Esport');


router.get('/',(req, res)=> {
    //res.send('Metodo que lista los Esports');
     Esport.find().then((esports)=>{
       res.json(esports);
     }).catch((error)=>{
       if(error)
       throw error;
     });
   });
   //Encuentra un Esport especifico
   router.get('/:idEsport',(req, res)=> {
     //res.send('Encuentra un Esport'+req.params.idEsport);
     let IdEsport=req.params.idEsport;
   
     
     Esport.find({IdEsport}).then((esport)=>{
     res.json(esport);
    }).catch((error)=>{
      if(error)
      throw error;
    });
   
   });
   //Registro de datos
   router.post('/',(req, res)=> {
     //res.json(req.body);
     var newEsport={
       IdEsport:req.body.IdEsport,
       Nombre:req.body.Nombre,
       FechaInicio:req.body.FechaInicio,
       FechaFin:req.body.FechaFin,
        Premio:req.body.Premio
     }
    //Esport ES EL MODELO Y LE PASAMOS LOS DATOS
     var edeporte=new Esport(newEsport);
     edeporte.save().then(()=>{
       console.log("El nuevo Esport se ha creado");
       res.send("Un nuevo Esport ha sido creado");
     }).catch((error)=>{
       if(error){
         console.log("Un error ha ocurrido al agregar un Esport");
         throw error;
       }
     });
   });
   //Actualizasion de registros
   router.put('/',(req, res)=> {
     //res.send('Modifica el registro de un Esport');
     Esport.findOne({IdEsport:req.body.IdEsport}).then((esports)=>{
       
      esports.FechaInicio=req.body.FechaInicio;
      esports.FechaFin=req.body.FechaFin;
      esports.Premio=req.body.Premio;
       
       //Solamente modificamos el nombre y apellidos
       esports.markModified('FechaInicio');
       esports.markModified('FechaFin');
       esports.markModified('Premio');
   
       esports.save().then(()=>{
         res.send("El Esport ha sido modificado existosamente");
   
       }).catch((error)=>{
         if(error)
         throw error;
       });
     });
   
   });
   //Eliminar registros
   router.delete('/:idEsport',(req, res)=> {
     //res.send('Eliminando un registro '+req.params.numerocontrol);
     Esport.findOneAndRemove({IdEsport:req.params.idEsport}).then(()=>{
       res.send("El Esport se ha eliminado exitosamente");
     
     }).catch((error)=>{
       if(error)
       throw error;
     });
    });
   
    module.exports = router;