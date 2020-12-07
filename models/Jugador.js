const mongoose=require('mongoose');
require('../models/Equipo');
var Schema = mongoose.Schema;
const Equipo=mongoose.model('Equipo');
mongoose.model('Jugador',{
        IdJugador:{
            type:Number,
            require:true,
            unique:true
        },
        Nombre:{
            type:String,
            require:true,
            minleght:3
        },
        Posicion:{
            type:String,
            require:true,
        
        },
        HorasJuego:{
            type:Number,
            require:true
        },
        Kda:{
            type:Number,
            require:true
        },
        Sueldo:{
            type:Number,
            require:true
        },
        equipo: { type:  Schema.ObjectId, ref: "Equipo" } 



})