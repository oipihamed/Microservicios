var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Jugador');
const Jugador=mongoose.model('Jugador');


router.get('/',(req, res)=> {
    //res.send('Metodo que lista los Jugadors');
     Jugador.find().then((jugadores)=>{
       res.json(jugadores);
     }).catch((error)=>{
       if(error)
       throw error;
     });
   });
   //Encuentra un Jugador especifico
   router.get('/:idJugador',(req, res)=> {
     //res.send('Encuentra un Jugador'+req.params.idJugador);
     let IdJugador=req.params.idJugador;
   
     
     Jugador.find({IdJugador}).then((jugador)=>{
     res.json(jugador);
    }).catch((error)=>{
      if(error)
      throw error;
    });
   
   });
   //Registro de datos
   router.post('/',(req, res)=> {
     //res.json(req.body);
     var newJugador={
       IdJugador:req.body.IdJugador,
       Nombre:req.body.Nombre,
       Posicion:req.body.Posicion,
       HorasJuego:req.body.HorasJuego,
       Kda:req.body.Kda,
       Sueldo:req.body.Sueldo,
       Equipo:req.body.Equipo
     }
    //Jugador ES EL MODELO Y LE PASAMOS LOS DATOS
     var team=new Jugador(newJugador);
     team.save().then(()=>{
       console.log("El nuevo Jugador se ha creado");
       res.send("Un nuevo Jugador ha sido creado");
     }).catch((error)=>{
       if(error){
         console.log("Un error ha ocurrido al agregar un Jugador");
         throw error;
       }
     });
   });
   //Actualizasion de registros
   router.put('/',(req, res)=> {
     //res.send('Modifica el registro de un Jugador');
     Jugador.findOne({IdJugador:req.body.IdJugador}).then((jugadores)=>{
      jugadores.Nombre=req.body.Nombre;
      jugadores.Posicion=req.body.Posicion;
      jugadores.HorasJuego=req.body.HorasJuego;
      jugadores.Kda=req.body.Kda;
     
       //Solamente modificamos el nombre y apellidos
       jugadores.markModified('Nombre');
       jugadores.markModified('Posicion');
       jugadores.markModified('HorasJuego');
       jugadores.markModified('Kda');
   
       jugadores.save().then(()=>{
         res.send("El Jugador ha sido modificado existosamente");
   
       }).catch((error)=>{
         if(error)
         throw error;
       });
     });
   
   });
   //Eliminar registros
   router.delete('/:idJugador',(req, res)=> {
     //res.send('Eliminando un registro '+req.params.numerocontrol);
     Jugador.findOneAndRemove({IdJugador:req.params.idJugador}).then(()=>{
       res.send("El Jugador se ha eliminado exitosamente");
     
     }).catch((error)=>{
       if(error)
       throw error;
     });
    });
   
    module.exports = router;