import { useState, useEffect } from 'react';

export const useThemeMode = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {

  // Función que se ejecutará cuando cambie el tema
  const handleThemeChange = (e) => {
   setIsDarkMode(e.matches);
  };
  
  // Agregar un listener a la media query que detecta el tema preferido del usuario
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setIsDarkMode(darkModeMediaQuery.matches); // Establecer el estado inicial del tema

  // Asignar el listener a la función que se ejecutará cuando cambie el tema
  darkModeMediaQuery.addEventListener('change', handleThemeChange);

  // Limpiar el listener cuando se desmonte el componente
  return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
 }, []);

 return isDarkMode;
};
