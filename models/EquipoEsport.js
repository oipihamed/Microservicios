const mongoose=require('mongoose');
var Schema = mongoose.Schema;
const Equipo=mongoose.model('Equipo');
const Esport=mongoose.model('Esport');
mongoose.model('EquipoEsport',{
    IdEquipo:{
        type:  Schema.Types.ObjectId, 
        ref: "Equipo", 
        require:true
      
    },
    IdEsport:{ 
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