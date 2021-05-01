// GENERA UN NUEVO ESTADO Y ""PISA"" EL ESTADO ANTERIOR
// COMO LO HAGO

const initialState = {
    movies: [], //donde yo ponga todas mis peliculas favoritas
    moviesLoading: false,
    moviesLoaded: [], //las pelis buscadas en el buscador
    movieDetail: {}, // objeto con los detalles de la pelicula
  };

  function rootReducer(state = initialState, action) {
   switch(action.type){
        case "ADD_MOVIE_FAVORITE":
          // let filter = state.movies.filter(movie => movie.id !== action.payload.id)
          return {
            //movies.push(action.payload)?? NOOOO!
            ...state, // spread operator EMS6
            movies: state.movies.concat(action.payload)
            //movies: [...state.movies, action.payload] OTRA FORMA VALIDA!
          };
        case "REMOVE_MOVIE_FAVORITE":
          return {
            ...state,
            movies: state.movies.filter(movie => movie.id !== action.payload.id)
          };
        case "GET_MOVIES":
          return {
            ...state,
            moviesLoaded: action.payload.Search,
            moviesLoading: false
          };
        case "GET_MOVIES_LOADING":
          return{
            ...state,
            moviesLoading: true
          };
        case "GET_MOVIES_DETAIL":
          return {
            ...state,
            movieDetail: action.payload,
          };
        default:
          //NO OLVIDARSE DE ESCRIBIR EL DEFAULT
          //CASO CONTRARIO AL LEVANTAR LA APP NO VOY A TENER NINGUN ESTADO
          //POR LO TANTO SI QUIERO MODIFICAR UN ESTADO ME VA A TIRAR ERROR
          return state;

   }
    // if (action.type === "ADD_MOVIE_FAVORITE") {
    //     return {
    //       ...state,
    //       movies: state.movies.concat(action.playload)
    //     }
    // }
    // if (action.type === "GET_MOVIES") {
    //     return {
    //       ...state,
    //       moviesLoaded: action.playload.Search
    //     };
    // }
    // if(action.type === "REMOVE_MOVIE_FAVORITE"){
    //     return {
    //         ...state,
    //         movies: state.movies.remove(action.playload)
    //     };
    // }
    // if(action.type === "GET_MOVIES_DETAIL"){
    //     return {
    //         ...state,
    //         moviesLoaded: action.playload.Search
    //     };
    // }
    // return state;
  }
  
  export default rootReducer;