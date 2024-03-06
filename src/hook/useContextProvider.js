import { useContext } from "react";
import { LanguageContext, CursorContext, ModalContext, NavBarContext } from "/src/context/";

export const useLanguage = () => {
 const context = useContext(LanguageContext);
 if (!context) {
  throw new Error("useLanguage must be used within a LanguageProvider");
 }
 return context;
};

export const useCustomCursorContext = () => {
 const context = useContext(CursorContext);
 if (!context) {
  throw new Error("useCustomCursor must be used within a CursorContext.Provider");
 }
 return context;
};

export const useModalContext = () => {
 const context = useContext(ModalContext);
 if (!context) {
  throw new Error("useModalContext must be used within a ModalContext.Provider");
 }
 return context;
};

export const useNavBarContext = () => {
 const context = useContext(NavBarContext);
 if (!context) {
  throw new Error("useNavBarContext must be used within a NavBarContext.Provider");
 }
 return context;
};



//*En mis componentes llamo a useLanguage para traer el state global y dispatch, con el dispatch manejo las acciones
// En cualquier componente donde quieras utilizar los textos, utiliza el hook useLanguage para acceder al contexto y los textos según el idioma seleccionado:

// import { useLanguage } from './LanguageContext';

// const MyComponent = () => {
//   const { language, setLanguage, texts } = useLanguage();

//   return (
//     <div>
//       <button onClick={() => setLanguage('en')}>English</button>
//       <button onClick={() => setLanguage('es')}>Español</button>
//       <h1>{texts.welcome}</h1>
//       <p>{texts.about}</p>
//       <p>{texts.contact}</p>
//       {/* Resto de tu contenido */}
//     </div>
//   );
// };

// export default MyComponent;
