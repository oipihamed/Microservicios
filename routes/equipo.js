var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Equipo');
const Equipo=mongoose.model('Equipo');


router.get('/',(req, res)=> {
    //res.send('Metodo que lista los equipos');
     Equipo.find().then((equipos)=>{
       res.json(equipos);
     }).catch((error)=>{
       if(error)
       throw error;
     });
   });
   //Encuentra un Equipo especifico
   router.get('/:idequipo',(req, res)=> {
     //res.send('Encuentra un Equipo'+req.params.idequipo);
     let IdEquipo=req.params.idequipo;
   
     
     Equipo.find({IdEquipo}).then((equipo)=>{
     res.json(equipo);
    }).catch((error)=>{
      if(error)
      throw error;
    });
   
   });
   //Registro de datos
   router.post('/',(req, res)=> {
     //res.json(req.body);
     var newEquipo={
       IdEquipo:req.body.IdEquipo,
       Nombre:req.body.Nombre,
       Pais:req.body.Pais,
       Region:req.body.Region,
       NumeroJugadores:req.body.NumeroJugadores
     }
     IdEquipo=req.body.IdEquipo;
    //Equipo ES EL MODELO Y LE PASAMOS LOS DATOS
     var team=new Equipo(newEquipo);
     Equipo.findOne({IdEquipo}).then((equipos)=>{
       
     console.log(equipos);
    
      if (equipos==null){
        team.save().then(()=>{
          console.log("El nuevo Equipo se ha creado");
          res.send("Un nuevo Equipo ha sido creado");
        }).catch((error)=>{
          if(error){
            console.log("Un error ha ocurrido al agregar un Equipo");
            throw error;
          }
        });
       }else{
        console.log("El equipo ya existe");
         res.send("El equipo ya existe");
       }
     });
     
   });
   //Actualizasion de registros
   router.put('/',(req, res)=> {
     //res.send('Modifica el registro de un Equipo');
     Equipo.findOne({IdEquipo:req.body.IdEquipo}).then((equipos)=>{
       equipos.Nombre=req.body.Nombre;
       equipos.Pais=req.body.Pais;
       equipos.Region=req.body.Region;
       equipos.NumeroJugadores=req.body.NumeroJugadores;
       
       //Solamente modificamos el nombre y apellidos
       equipos.markModified('Nombre');
       equipos.markModified('Pais');
       equipos.markModified('Region');
       equipos.markModified('NumeroJugadores');
   
       equipos.save().then(()=>{
         res.send("El Equipo ha sido modificado existosamente");
   
       }).catch((error)=>{
         if(error)
         throw error;
       });
     });
   
   });
   //Eliminar registros
   router.delete('/:idequipo',(req, res)=> {
     //res.send('Eliminando un registro '+req.params.numerocontrol);
     Equipo.findOneAndRemove({IdEquipo:req.params.idequipo}).then(()=>{
       res.send("El Equipo se ha eliminado exitosamente");
     
     }).catch((error)=>{
       if(error)
       throw error;
     });
    });
   
    module.exports = router;
   
   