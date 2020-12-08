const moongose=require('mongoose');

moongose.model('Equipo',{
        IdEquipo:{//IDENTIFICADOR UNICO DEL EQUIPO
            type:Number,
            require:true,
            unique:true
        },
        Nombre:{//NOMBRE DEL EQUIPO
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