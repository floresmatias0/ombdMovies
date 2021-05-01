import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { addMovieFavorite} from "../../../actions/index"
import fav from '../../../img/favorito.png'
// import addedfav from '../../../img/favoritoadded.png'
import {withTranslation} from 'react-i18next'
import './Card.css'
import '../../../animations/animations.css'
import swal from 'sweetalert';
import imgDefault from '../../../img/default.png'

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
            favorite: this.props.MOVIES_FAV
        }
    }

    handleAlert(movie) {
        this.props.addMovieFavorite(movie)                       
        swal({
            text: "Success!!"
          });
    }
    // Cuando usamos un componente de clase necesitamos un constructor y si o si llamar a super
    render(){
        const {t} = this.props;
        return (
            <div className='container-cards'>
                {this.props && this.props.MOVIES && this.props.MOVIES.length > 0 ? (
                    this.props.MOVIES.map((movie,key) =>{
                        return (
                        <div className='card-movie' key={key}>
                            <ul className='content-movie'>
                                <div>
                                <NavLink to={`/movie/${movie.imdbID}`}>
                                    <img className='poster-movie' src={movie.Poster === "N/A" ? imgDefault : movie.Poster} alt='poster'/>
                                </NavLink>
                                </div>
                                <div>
                                    <NavLink to={`/movie/${movie.imdbID}`}>
                                    <p className='movie-title'>{movie.Title}</p> 
                                    </NavLink>
                                    <p>{movie.Type}</p>
                                    <p>{movie.Year}</p> 
                                    <p className='fav-movie-icon'>
                                        {t('add')}
                                        <img onClick={() => this.handleAlert(movie)} src={fav} alt='fav'/>
                                    </p>
                                    {/* <p className={this.state.hidden ? 'fav-movie-icon-added' : 'fav-movie-icon'}><img src={addedfav} alt='added'/></p> */}
                                </div>

                            </ul>
                        </div>        
                )})):(<p className='words-example floating'>{t('parrafo5')} </p>  )/* Title en mayuscula porque en la Api aparece con mayuscula*/}
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
       MOVIES: state.moviesLoaded, 
       MOVIES_FAV: state.movies 
    }
}

function mapDispatchToProps(dispatch) {
    return {
      addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie))
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(withTranslation()(Card));