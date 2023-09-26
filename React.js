import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para el Singleton
const BibliotecaContext = createContext();

// Función que crea y devuelve una instancia única de la biblioteca
function crearBiblioteca() {
  // Puedes agregar lógica para inicializar la biblioteca aquí si es necesario
  return {
    nombre: 'Biblioteca Central',
    catalogo: [],
    // Otros atributos y métodos de la biblioteca
  };
}

// Componente que proporciona el contexto de la biblioteca
export function BibliotecaProvider({ children }) {
  const [biblioteca] = useState(crearBiblioteca());

  return (
    <BibliotecaContext.Provider value={biblioteca}>
      {children}
    </BibliotecaContext.Provider>
  );
}

// Función personalizada para acceder al contexto de la biblioteca
export function useBiblioteca() {
  const context = useContext(BibliotecaContext);
  if (!context) {
    throw new Error('useBiblioteca debe usarse dentro de un BibliotecaProvider');
  }
  return context;
}
