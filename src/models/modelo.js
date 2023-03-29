/*Descripción: Este archivo contiene el modelo del objeto Libro
 y la función que inicializa un objeto de tipo Libro.*/ 


 // se crea el objeto Libro
const Libro = {
    id: Number,
    titulo: String,
    autor: String,
    editorial: String,
    fecha: String,
    cantPaginas: Number
};

//se crea la función que inicializa un objeto de tipo Libro
function initLibro (id, titulo, autor, editorial, fecha, cantPaginas)
{
    const book = Object.create(Libro)
    book.id = id;
    book.titulo = titulo;
    book.autor = autor;
    book.editorial = editorial;
    book.fecha = fecha;
    book.cantPaginas = cantPaginas;

    return book;
}

//se exporta el modulo, para poder ser usado en otros archivos
module.exports = initLibro;