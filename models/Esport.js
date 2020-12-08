const moongose=require('mongoose');

moongose.model('Esport',{
        IdEsport:{//IDENTIFICADOR UNICO DEL ESPORT
            type:Number,
            require:true,
            unique:true
        },
        Nombre:{
            type:String,
            require:true,
            minleght:3
        },
        FechaInicio:{
            type:Date,
            require:true,
        
        },
        FechaFin:{
            type:Date,
            require:true
        },
        Premio:{
            type:Number,
            require:true
        }
     


});