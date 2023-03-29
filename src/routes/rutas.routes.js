/*Description: Rutas de la API REST 
que se encargan de realizar las operaciones CRUD sobre 
el objeto Libro.*/


//se importan los modulos necesarios
const {
  getLibros,
  findLibro,
  createLibro,
  updateLibro,
  deleteLibro,
} = require("../controllers/controlador");

const {Router} = require("express");
const router = Router();


//se establecen las rutas de la API REST
router.get("/libros", getLibros);
router.get("/libros/:id", findLibro);
router.post("/libros", createLibro);
router.put("/libros/:id", updateLibro);
router.delete("/libros/:id", deleteLibro);

//se exporta el modulo, para poder ser usado en otros archivos
module.exports = router;