import React from "react";
import Favoritos from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Inicio from "./components/Inicio/Inicio"
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './i18n.js';

function App() {
  return (

      <React.Fragment>
        <I18nextProvider i18n={i18next}>
          <NavBar />
          <Route exact path="/ombdMovies" component={Inicio} />
          <Route exact path="/home" component={Buscador} />
          <Route path="/favs" component={Favoritos} />
          <Route path="/movie/:id" component={Movie} />
        </I18nextProvider>  
      </React.Fragment>
  );
}

export default App;
