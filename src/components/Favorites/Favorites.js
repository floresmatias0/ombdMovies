import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {removeMovieFavorite} from "../../actions"
import imgDefault from '../../img/default.png'
import './Favorites.css';
import swal from "sweetalert";

export class ConnectedList extends Component {
  handleErase(movie){
    swal({
      text: "Delete!!",
    })
    this.props.removeMovieFavorite(movie)
  }
  render() {

    const {t} = this.props;

    return (
      <div className='container-card-fav'>
        <h1>{t('title-fav')}</h1>
        <div className='container-cards-movie'>
          {this.props.movies.map((movie,key)=> {
            return (
                <div className='card-movie-fav' key={key}>
                  <ul className='content-card-fav'>
                    <NavLink to={`/movie/${movie.imdbID}`}>
                      <p>{movie.Title}</p>
                    </NavLink>
                    <NavLink to={`/movie/${movie.imdbID}`}>
                      <img src={movie.Poster === "N/A" ? imgDefault : movie.Poster} alt='poster'/>
                    </NavLink>
                    <button className='erase' onClick={() => this.handleErase({id: movie.id})}>{t('erase')}</button>
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
  )(withTranslation()(ConnectedList));

