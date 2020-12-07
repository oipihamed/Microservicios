const mongoose=require('mongoose');

mongoose.model('Curso',{
    CursoNo:{
        type:Number,
        require:[true,'Se requiere numero de Curso'],
        unique:true
    },
    Cuatrimestre:{
        type:Number,
        require:[true,'Se requiere el numero de cuatrismestr'],
    
    },
    Fechainicio:{
        type:Date,
        require:[true,'Se requiere una fecha de inicio'],
       
    },
    FechaFin:{
        type:Date,
        requeire:[true,'Se requiere una fecha de fin'],
        
    },
    Nombre:{
        type:String,
        require:[true,'Se requiere un nombre de curso'],
        unique:true
    },
    Descripcion:{
        type:String,
        require:[true,'Se requiere una descripcion'],
        max:300
    }

});
