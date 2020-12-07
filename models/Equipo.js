const moongose=require('mongoose');

moongose.model('Equipo',{
        IdEquipo:{
            type:Number,
            require:true,
            unique:true
        },
        Nombre:{
            type:String,
            require:true,
            minleght:3
        },
        Pais:{
            type:String,
            require:true,
        
        },
        Region:{
            type:String,
            require:true
        },
        NumeroJugadores:{
            type:Number,
            require:true
        }

});