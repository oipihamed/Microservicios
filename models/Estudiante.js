const mongoose=require('mongoose');


mongoose.model('Estudiante',{
    NumeroControl:{
        type:Number,
        require:[true,'Se requiere numero de Control'],
        unique:true
    },
    Nombre:{
        type:String,
        require:[true,'Se requiere al menos tres caracteres'],
        minleght:3
    },
    Apellidos:{
        type:String,
        require:[true,'Se requiere ingresar un apellido'],
        minleght:true
    },
    Edad:{
        type:Number,
        requeire:true,
        min:10,
        max:120
    },
    Email:{
        type:String,
        require:true,
        unique:true
    }
    

});
