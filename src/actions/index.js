// actions creators
// las acciones DESCRIBEN lo que va a suceder


export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

export function getMoviesFavorite(){
    return { type: "GET_MOVIES_FAVORITE" }
}
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

 export function getMoviesDetail(imbdID) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${imbdID}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
        });
    };
  }
  export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }