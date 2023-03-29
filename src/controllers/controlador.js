/*Descripción: Controlador de libros que contiene las funciones 
que se encargan de realizar las operaciones CRUD sobre el objeto 
Libro.*/


//se importan los modulos necesarios
const ctrlLibros = {};
const Libros = [];
const initLibro = require("../models/modelo");

//se crea el id para el objeto Libro
let id = 0;

//se crea una funcion para listar los libros
ctrlLibros.getLibros = (req, res) => {
  if (Libros.length == 0) {
    res.status(201).json({ message: "No hay libros" });
  }
  res.status(200).json(Libros);
};

//se crea una funcion para buscar un libro
ctrlLibros.findLibro = (req, res) => {
  const libro = Libros.find((libro) => libro.id == req.params.id);
  if (!libro) res.status(404).json({ message: "Libro no encontrado" });
  res.status(200).json(libro);
};

//se crea una funcion para crear un libro
ctrlLibros.createLibro = (req, res) => {
  id++;
  const { titulo, autor, editorial, fecha, cantPaginas } = req.body;
  Libros.push(initLibro(id, titulo, autor, editorial, fecha, cantPaginas));

  res.status(201).json({ message: "Libro creado" });
};

//se crea una funcion para actualizar un libro
ctrlLibros.updateLibro = (req, res) => {
  const libro = Libros.find((libro) => libro.id == req.params.id);
  if (!libro) {
    res.status(404).json({ message: "Libro no encontrado" });
  } else {
    const { titulo, autor, editorial, fecha, cantPaginas } = req.body;
    libro.titulo = titulo;
    libro.autor = autor;
    libro.editorial = editorial;
    libro.fecha = fecha;
    libro.cantPaginas = cantPaginas;
    res.status(200).json({ message: "Libro actualizado" });
  }
};

//se crea una funcion para eliminar un libro
ctrlLibros.deleteLibro = (req, res) => {
  const libro = Libros.find((libro) => libro.id == req.params.id);
  if (!libro) {
    res.status(404).json({ message: "Libro no encontrado" });
  } else {
    Libros.splice(Libros.indexOf(libro), 1);
    res.status(200).json({ message: "Libro eliminado" });
  }
};

//se exporta el modulo, para poder ser usado en otros archivos
module.exports = ctrlLibros;
