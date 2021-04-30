import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from "../../actions"

export class ConnectedList extends Component {

  render() {
    return (
      <div className='container-card-fav'>
        <h2>Películas Favoritas</h2>
        <div className='container-cards-movie'>
          {this.props.movies.map((movie,key)=> {
            return (
                <div className='card-movie-fav' key={key}>
                  <ul className='content-card-fav'>
                    <NavLink to={`/movie/${movie.imdbID}`}>
                      <p>{movie.Title}</p>
                    </NavLink>
                    <NavLink to={`/movie/${movie.imdbID}`}>
                      <img src={movie.Poster} alt='poster'/>
                    </NavLink>
                    <button onClick={() => this.props.removeMovieFavorite({id: movie.id})}>Remove</button>
                  </ul> 
                </div>
            ) 
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ConnectedList);

