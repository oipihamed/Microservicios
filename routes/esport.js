var express = require('express');
var router = express.Router();

//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Esport');
const Esport=mongoose.model('Esport');

router.get('/',(req, res)=> {
    //Metodo que lista los Esports;
     Esport.find().then((esports)=>{
       res.json(esports);
     }).catch((error)=>{
       if(error)
       throw error;
     });
   });
   //Encuentra un Esport especifico
   router.get('/:idEsport',(req, res)=> {
     
     let IdEsport=req.params.idEsport;
     
     Esport.find({IdEsport}).then((esport)=>{//SE DEVUELVE UN ESPORT ESPECIFICO POR EL ID
     res.json(esport);
    }).catch((error)=>{
      if(error)
      throw error;
    });
   
   });
   //Registro de datos
   router.post('/',(req, res)=> {
    
     var newEsport={//SE CREA EL NUEVO ESPORT
       IdEsport:req.body.IdEsport,
       Nombre:req.body.Nombre,
       FechaInicio:req.body.FechaInicio,
       FechaFin:req.body.FechaFin,
        Premio:req.body.Premio
     }
    //Esport ES EL MODELO Y LE PASAMOS LOS DATOS
     var edeporte=new Esport(newEsport);
     IdEsport=req.body.IdEsport
     Esport.findOne({IdEsport}).then((esports)=>{
       
      console.log(esports);
     
       if (esports==null){//SI NO EXISTE EL ESPORT SE REALIZA EL REGISTRO
        edeporte.save().then(()=>{
          console.log("El nuevo Esport se ha creado");
          res.send("Un nuevo Esport ha sido creado");
        }).catch((error)=>{
          if(error){
            console.log("Un error ha ocurrido al agregar un Esport");
            throw error;
          }
        });
        }else{//SI ESPORTS TIENE UN REGISTRO SE ENVIA UN MENSAJE
         console.log("El  Esport ya existe");
          res.send("El Esport ya existe");
        }
      });
     
    
     
  
    
   });
   //Actualizasion de registros
   router.put('/',(req, res)=> {
     Esport.findOne({IdEsport:req.body.IdEsport}).then((esports)=>{//SE REALIZA LA BUSQUEDA DEL ESPORT
       
      esports.FechaInicio=req.body.FechaInicio;
      esports.FechaFin=req.body.FechaFin;
      esports.Premio=req.body.Premio;
       
       //SE MODIFICA LA FECHA INICIO, FIN Y EL PREMIO
       esports.markModified('FechaInicio');
       esports.markModified('FechaFin');
       esports.markModified('Premio');
   
       esports.save().then(()=>{//SE GUARDA LA ACTUALIZACION EN LA BD
         res.send("El Esport ha sido modificado existosamente");
   
       }).catch((error)=>{
         if(error)
         throw error;
       });
     });
   
   });
   //Eliminar registros
   router.delete('/:idEsport',(req, res)=> {
     Esport.findOneAndRemove({IdEsport:req.params.idEsport}).then(()=>{//sE BUSCA UN REGISTRO ESPECIFICO Y SE ELIMINA
       res.send("El Esport se ha eliminado exitosamente");
     
     }).catch((error)=>{
       if(error)
       throw error;
     });
    });
   
    module.exports = router;