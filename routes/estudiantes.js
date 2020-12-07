var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Estudiante');
const Estudiante=mongoose.model('Estudiante');

//Listar los registros

router.get('/',(req, res)=> {
 //res.send('Metodo que lista los estudiantes');
  Estudiante.find().then((estudiantes)=>{
    res.json(estudiantes);
  }).catch((error)=>{
    if(error)
    throw error;
  });
});
//Encuentra un estudiante especifico
router.get('/:numerocontrol',(req, res)=> {
  //res.send('Encuentra un estudiante'+req.params.numerocontrol);
  let NumeroControl=req.params.numerocontrol;
  
  Estudiante.find({NumeroControl}).then((estudiante)=>{
  res.json(estudiante);
 }).catch((error)=>{
   if(error)
   throw error;
 });

});
//Registro de datos
router.post('/',(req, res)=> {
  //res.json(req.body);
  var newEstudiante={
    NumeroControl:req.body.NumeroControl,
    Nombre:req.body.Nombre,
    Apellidos:req.body.Apellidos,
    Edad:req.body.Edad,
    Email:req.body.Email
  }
 //ESTUDIANTE ES EL MODELO Y LE PASAMOS LOS DATOS
  var student=new Estudiante(newEstudiante);
  student.save().then(()=>{
    console.log("El nuevo estudiante se ha creado");
    res.send("Un nuevo estudiante ha sido creado");
  }).catch((error)=>{
    if(error){
      console.log("Un error ha ocurrido al agregar un estudiante");
      throw error;
    }
  });
});
//Actualizasion de registros
router.put('/',(req, res)=> {
  //res.send('Modifica el registro de un estudiante');
  Estudiante.findOne({NumeroControl:req.body.NumeroControl}).then((estudiante)=>{
    estudiante.Nombre=req.body.Nombre;
    estudiante.Apellidos=req.body.Apellidos;
    //Solamente modificamos el nombre y apellidos
    estudiante.markModified('Nombre');
    estudiante.markModified('Apellidos');

    estudiante.save().then(()=>{
      res.send("El estudiante ha sido modificado existosamente");

    }).catch((error)=>{
      if(error)
      throw error;
    });
  });

});
//Eliminar registros
router.delete('/:numerocontrol',(req, res)=> {
  //res.send('Eliminando un registro '+req.params.numerocontrol);
  Estudiante.findOneAndRemove({NumeroControl:req.params.numerocontrol}).then(()=>{
    res.send("El estudiante se ha eliminado exitosamente");
  
  }).catch((error)=>{
    if(error)
    throw error;
  });
 });

 module.exports = router;

