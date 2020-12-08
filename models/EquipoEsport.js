const mongoose=require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('EquipoEsport',{//CREACION DEL MODELO EQUIPO ESPORT
    IdEquipo:{//ID QUE REFERENCIA EL ESQUEMA EQUIPO
        type:  Schema.Types.ObjectId, 
        ref: "Equipo", 
        require:true
      
    },
    IdEsport:{ //ID QUE REFERENCIA EL ESQUEMA ESPORT
        type:  Schema.Types.ObjectId, 
        ref: "Esport", 
        require:true
    },
    Posicion:{
        type:Number,
        require:true
    },
    Disponible:{
        type:Boolean,
        require:true,
        default:false
    }

});