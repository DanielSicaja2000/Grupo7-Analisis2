Singlenton en Python

class Biblioteca:
    def __init__(self, nombre):
        self.nombre = nombre
        self.catalogo = []

    # Método para agregar un libro al catálogo
    def agregar_libro(self, libro):
        self.catalogo.append(libro)

    # Otros métodos de la biblioteca


class BibliotecaSingleton:
    _instancia = None

    def __new__(cls, nombre):
        if cls._instancia is None:
            cls._instancia = super(BibliotecaSingleton, cls).__new__(cls)
            cls._instancia.biblioteca = Biblioteca(nombre)
        return cls._instancia

    def obtener_biblioteca(self):
        return self._instancia.biblioteca


# Uso del Singleton
biblioteca1 = BibliotecaSingleton("Biblioteca Central").obtener_biblioteca()
biblioteca2 = BibliotecaSingleton("Biblioteca del Campus Norte").obtener_biblioteca()

print(biblioteca1 is biblioteca2)  # Devuelve True, ya que ambas variables apuntan a la misma instancia
