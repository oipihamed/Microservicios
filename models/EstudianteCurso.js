const mongoose=require('mongoose');

mongoose.model('EstudianteCurso',{
    NumeroControl:{
        type:mongoose.SchemaTypes.Number,
        require:true
    },
    CursoNo:{
        type:mongoose.SchemaTypes.Number,
        require:true
    },
    Puntuacion:{
        type:Number,
        require:true
    },
    Terminmado:{
        type:Boolean,
        require:true,
        default:false
    }

});