var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Equipo');
const Equipo=mongoose.model('Equipo');


router.get('/',(req, res)=> {//METODO QUE LISTA TODOS LOS EQUIPOS

     Equipo.find().then((equipos)=>{
       res.json(equipos);
     }).catch((error)=>{
       if(error)
       throw error;
     });
   });
   //Encuentra un Equipo especifico
   router.get('/:idequipo',(req, res)=> {
  
     let IdEquipo=req.params.idequipo;//SE OBTIENE EL ID DEL EQUIPO POR MEDIO DE LOS PARAMETROS ENVIADOS
   
     
     Equipo.find({IdEquipo}).then((equipo)=>{//SE REALIZA LA BUSQUEDA DEL EQUIPO
     res.json(equipo);
    }).catch((error)=>{
      if(error)
      throw error;
    });
   
   });
   //Registro de datos
   router.post('/',(req, res)=> {
     
     var newEquipo={//SE CREA EL NUEVO EQUIPO
       IdEquipo:req.body.IdEquipo,
       Nombre:req.body.Nombre,
       Pais:req.body.Pais,
       Region:req.body.Region,
       NumeroJugadores:req.body.NumeroJugadores
     }
     IdEquipo=req.body.IdEquipo;//SE OBTIENE EL ID DEL EQUIPO
    //Equipo ES EL MODELO Y LE PASAMOS LOS DATOS
     var team=new Equipo(newEquipo);
     Equipo.findOne({IdEquipo}).then((equipos)=>{//SE VERIFICA QUE NO EXISTA UN REGISTRO CON ESE ID EN LA BD
       
     console.log(equipos);
    
      if (equipos==null){//SI NO EXISTE REGISTRO DEL EQUIPO SE PROCEDE A GUARDAR EN LA BD
        team.save().then(()=>{
          console.log("El nuevo Equipo se ha creado");
          res.send("Un nuevo Equipo ha sido creado");
        }).catch((error)=>{
          if(error){
            console.log("Un error ha ocurrido al agregar un Equipo");
            throw error;
          }
        });
       }else{//SI EL EQUIPO EXISTE SE ENVIA ESTE MENSAJE
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
       
       //SE MODIFICA EL NOMBRE, PAIS, REGION Y NUMERO DE JUGADORES
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

     Equipo.findOneAndRemove({IdEquipo:req.params.idequipo}).then(()=>{
       res.send("El Equipo se ha eliminado exitosamente");
     
     }).catch((error)=>{
       if(error)
       throw error;
     });
    });
   
    module.exports = router;
   
   