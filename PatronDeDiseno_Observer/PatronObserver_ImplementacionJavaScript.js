// Definición de la interfaz para observadores
class ObservadorBiblioteca {
  actualizar(nuevoLibro) {
    // Lógica para manejar la notificación
    console.log(`Nuevo libro agregado: ${nuevoLibro.titulo}`);
  }
}

// Clase Biblioteca (Objeto Sujeto)
class Biblioteca {
  constructor() {
    this.observadores = [];
    this.catalogoLibros = [];
  }

  registrarObservador(observador) {
    this.observadores.push(observador);
  }

  eliminarObservador(observador) {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  nuevoLibroAgregado(nuevoLibro) {
    // Lógica para agregar el nuevo libro al catálogo
    this.catalogoLibros.push(nuevoLibro);

    // Notificar a los observadores
    this.notificarObservadores(nuevoLibro);
  }

  notificarObservadores(nuevoLibro) {
    for (const observador of this.observadores) {
      observador.actualizar(nuevoLibro);
    }
  }
}

// Clase UsuarioBiblioteca (Clase Observadora)
class UsuarioBiblioteca extends ObservadorBiblioteca {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }

  actualizar(nuevoLibro) {
    console.log(`${this.nombre}: Se ha agregado el libro "${nuevoLibro.titulo}" al catálogo.`);
  }
}

// Ejemplo de uso
const biblioteca = new Biblioteca();
const usuario1 = new UsuarioBiblioteca("Usuario1");
const usuario2 = new UsuarioBiblioteca("Usuario2");

biblioteca.registrarObservador(usuario1);
biblioteca.registrarObservador(usuario2);

biblioteca.nuevoLibroAgregado({ titulo: "Libro1" });
biblioteca.nuevoLibroAgregado({ titulo: "Libro2" });

// Resultado:
// Usuario1: Se ha agregado el libro "Libro1" al catálogo.
// Usuario2: Se ha agregado el libro "Libro1" al catálogo.
// Usuario1: Se ha agregado el libro "Libro2" al catálogo.
// Usuario2: Se ha agregado el libro "Libro2" al catálogo.
