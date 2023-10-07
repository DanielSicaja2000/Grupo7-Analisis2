from abc import ABC, abstractmethod

# Definición de la interfaz para observadores
class ObservadorBiblioteca(ABC):
    @abstractmethod
    def actualizar(self, nuevo_libro):
        pass

# Clase Biblioteca (Objeto Sujeto)
class Biblioteca:
    def __init__(self):
        self.observadores = []
        self.catalogo_libros = []

    def registrar_observador(self, observador):
        self.observadores.append(observador)

    def eliminar_observador(self, observador):
        self.observadores.remove(observador)

    def nuevo_libro_agregado(self, nuevo_libro):
        # Lógica para agregar el nuevo libro al catálogo
        self.catalogo_libros.append(nuevo_libro)

        # Notificar a los observadores
        self.notificar_observadores(nuevo_libro)

    def notificar_observadores(self, nuevo_libro):
        for observador in self.observadores:
            observador.actualizar(nuevo_libro)

# Clase UsuarioBiblioteca (Clase Observadora)
class UsuarioBiblioteca(ObservadorBiblioteca):
    def __init__(self, nombre):
        self.nombre = nombre

    def actualizar(self, nuevo_libro):
        print(f"{self.nombre}: Se ha agregado el libro '{nuevo_libro['titulo']}' al catálogo.")

# Ejemplo de uso
biblioteca = Biblioteca()
usuario1 = UsuarioBiblioteca("Usuario1")
usuario2 = UsuarioBiblioteca("Usuario2")

biblioteca.registrar_observador(usuario1)
biblioteca.registrar_observador(usuario2)

biblioteca.nuevo_libro_agregado({"titulo": "Libro1"})
biblioteca.nuevo_libro_agregado({"titulo": "Libro2"})

# Resultado:
# Usuario1: Se ha agregado el libro 'Libro1' al catálogo.
# Usuario2: Se ha agregado el libro 'Libro1' al catálogo.
# Usuario1: Se ha agregado el libro 'Libro2' al catálogo.
# Usuario2: Se ha agregado el libro 'Libro2' al catálogo.
