Singlenton en Javascript

class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.catalogo = [];
  }

  // Método para agregar un libro al catálogo
  agregarLibro(libro) {
    this.catalogo.push(libro);
  }

  // Otros métodos de la biblioteca
}

// Singleton para la Biblioteca
class BibliotecaSingleton {
  constructor(nombre) {
    if (!BibliotecaSingleton.instancia) {
      this.biblioteca = new Biblioteca(nombre);
      BibliotecaSingleton.instancia = this;
    }
    return BibliotecaSingleton.instancia;
  }

  obtenerBiblioteca() {
    return this.biblioteca;
  }
}

// Uso del Singleton
const biblioteca1 = new BibliotecaSingleton("Biblioteca Central").obtenerBiblioteca();
const biblioteca2 = new BibliotecaSingleton("Biblioteca del Campus Norte").obtenerBiblioteca();

console.log(biblioteca1 === biblioteca2); // Devuelve true, ya que ambas variables apuntan a la misma instancia
