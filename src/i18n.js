import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "parrafo1": "This page was created by matias flores",
      "parrafo2": "can search movies, series or video games info",
      "parrafo3": "for start a search go to home in the header",
      "parrafo4": "thanks for you visit",
      "search": "Search",
      "favorites": "Favorites",
      "finder": "Finder",
      "movie": "Movie: ",
      "button": "search",
      "parrafo5": "start a search for view the results...",
      "title-fav": "Movies Favorites",
      "add": "add fav",
      "erase": "remove"
    }
  },
  es: {
    translation: {
      "parrafo1": "Esta pagina fue creada por matias flores",
      "parrafo2": "busca informacion de peliculas, series o juegos",
      "parrafo3": "para empezar ve al home desde el boton de arriba",
      "parrafo4": "Gracias por tu visita",
      "search": "Buscar",
      "favorites": "Favoritos", 
      "finder": "Buscador",
      "movie": "Pelicula: ",
      "button": "buscar",
      "parrafo5": "realiza una busqueda para que aparezcan los resultados...",
      "title-fav": "Peliculas Favoritas",
      "add": "agregar",
      "erase": "borrar"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;