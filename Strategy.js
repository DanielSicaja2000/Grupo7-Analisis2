// Paso 1: Define la interfaz "EstrategiaPermiso"
class EstrategiaPermiso {
  verificarPermiso(usuario, permiso) {
    // M�todo com�n para verificar permisos
    throw new Error('M�todo verificarPermiso debe ser implementado por las subclases');
  }
}

// Paso 2: Implementa clases concretas para diferentes estrategias de permisos
class EstrategiaPermisoLector extends EstrategiaPermiso {
  verificarPermiso(usuario, permiso) {
    // L�gica para verificar permisos de lectores
    return usuario.permisos.includes(permiso);
  }
}

class EstrategiaPermisoBibliotecario extends EstrategiaPermiso {
  verificarPermiso(usuario, permiso) {
    // L�gica para verificar permisos de bibliotecarios
    return usuario.permisos.includes(permiso);
  }
}

// Paso 3: Crea una clase "ContextoPermisos" que acepte una estrategia en su constructor
class ContextoPermisos {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  verificarPermiso(usuario, permiso) {
    return this.estrategia.verificarPermiso(usuario, permiso);
  }
}

// Paso 4: En tu sistema, crea objetos de usuario con roles y permisos correspondientes
class Usuario {
  constructor(nombre, permisos) {
    this.nombre = nombre;
    this.permisos = permisos;
  }
}

// Ejemplo de creaci�n de usuarios
const lector = new Usuario("Juan", ["prestar_libro", "ver_catalogo"]);
const bibliotecario = new Usuario("Mar�a", ["agregar_libro", "eliminar_libro"]);

// Paso 5: Asigna una estrategia de verificaci�n de permisos a cada contexto de usuario
const contextoLector = new ContextoPermisos(new EstrategiaPermisoLector());
const contextoBibliotecario = new ContextoPermisos(new EstrategiaPermisoBibliotecario());

// Paso 6: Verificar permisos para usuarios
const permisoPrestar = "prestar_libro";
const permisoEliminar = "eliminar_libro";

console.log(`�Juan puede prestar un libro? ${contextoLector.verificarPermiso(lector, permisoPrestar)}`);
console.log(`�Mar�a puede eliminar un libro? ${contextoBibliotecario.verificarPermiso(bibliotecario, permisoEliminar)}`);
