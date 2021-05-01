import React from "react";
import Favoritos from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Inicio from "./components/Inicio/Inicio"

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/ombdMovies" component={Inicio} />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favoritos} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;
