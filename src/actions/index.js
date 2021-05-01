// actions creators
// las acciones DESCRIBEN lo que va a suceder
import swal from 'sweetalert'


export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      dispatch({ type: "GET_MOVIES_LOADING" })
      return fetch("https://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          if(!json.Search){
            swal({
              text:"sorry, the movie was not found, please try again"
            })
          }else{
            dispatch({ type: "GET_MOVIES", payload: json });
          }
        });
    };
  }

 export function getMoviesDetail(imbdID) {
    return function(dispatch) {
      return fetch(`https://www.omdbapi.com/?apikey=20dac387&i=${imbdID}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
        });
    };
  }
  export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }