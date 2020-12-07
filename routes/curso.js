var express = require('express');
var router = express.Router();
//Conectando con la base de datos
var mongoose=require("mongoose");
require('../models/Curso');
const Curso=mongoose.model('Curso');

//Listar los registros

router.get('/',(req, res)=> {
  //res.send('Metodo que lista los Curso');
  Curso.find().then((curso)=>{
     res.json(curso);
   }).catch((error)=>{
     if(error)
     throw error;
   });
 });
 //Encuentra un curso especifico
 router.get('/:cursono',(req, res)=> {
  
   let CursoNo=req.params.cursono;
 
   
   Curso.find({CursoNo}).then((curso)=>{
   res.json(curso);
  }).catch((error)=>{
    if(error)
    throw error;
  });
 
 });
 //Registro de datos
 router.post('/',(req, res)=> {
   //res.json(req.body);
   var newCurso={
    CursoNo:req.body.CursoNo,
    Cuatrimestre:req.body.Cuatrimestre,
    Fechainicio:req.body.Fechainicio,
    FechaFin:req.body.FechaFin,
    Nombre:req.body.Nombre,
    Descripcion:req.body.Descripcion
   }
  //ESTUDIANTE ES EL MODELO Y LE PASAMOS LOS DATOS
   var curso=new Curso(newCurso);
   curso.save().then(()=>{
     console.log("El nuevo curso se ha creado");
     res.send("Un nuevo curso ha sido creado");
   }).catch((error)=>{
     if(error){
       console.log("Un error ha ocurrido al agregar un curso");
       throw error;
     }
   });
 });
 //Actualizasion de registros
 router.put('/',(req, res)=> {
   //res.send('Modifica el registro de un estudiante');
   Curso.findOne({CursoNo:req.body.CursoNo}).then((curso)=>{
    curso.Nombre=req.body.Nombre;
    curso.Fechainicio=req.body.Fechainicio;
    curso.FechaFin=req.body.FechaFin;
    curso.Descripcion=req.body.Descripcion;
     //Solamente modificamos el nombre y apellidos
     curso.markModified('Nombre');
     curso.markModified('Fechainicio');
     curso.markModified('FechaFin');
     curso.markModified('Descripcion');
 
     curso.save().then(()=>{
       res.send("El curso ha sido modificado existosamente");
 
     }).catch((error)=>{
       if(error)
       throw error;
     });
   });
 
 });
 //Eliminar registros
 router.delete('/:cursono',(req, res)=> {
   //res.send('Eliminando un registro '+req.params.numerocontrol);
   Curso.findOneAndRemove({CursoNo:req.params.cursono}).then(()=>{
     res.send("El curso se ha eliminado exitosamente");
   
   }).catch((error)=>{
     if(error)
     throw error;
   });
  });
 

 module.exports = router;

