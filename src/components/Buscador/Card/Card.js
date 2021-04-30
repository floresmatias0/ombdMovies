import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { addMovieFavorite, getMoviesFavorite } from "../../../actions/index"
import fav from '../../../img/favorito.png'
// import addedfav from '../../../img/favoritoadded.png'
import './Card.css'
import swal from 'sweetalert';

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
            favorite: this.props.MOVIES_FAV
        }
    }

    // componentDidUpdate(prevState,prevProps) {
    //     console.log(prevProps)
    //     let favorite = this.state.favorite

    //     if(favorite !== prevState.MOVIES_FAV){  
    //         this.setState({favorite: favorite = prevState.MOVIES_FAV.concat(favorite)})
    //         return alert("UPDATE")
    //     } 
    // }
    
    handleAlert(movie) {
        this.props.addMovieFavorite(movie)                       
        swal({
            icon: "success",
          });
    }
    // Cuando usamos un componente de clase necesitamos un constructor y si o si llamar a super
    render(){
        return (
            <div className='container-cards'>
                {this.props && this.props.MOVIES.length > 0 ? (
                    this.props.MOVIES.map((movie,key) =>{
                        return (
                        <div className='card-movie' key={key}>
                            <ul className='content-movie'>
                                <div>
                                <NavLink to={`/movie/${movie.imdbID}`}>
                                    <img src={movie.Poster} alt='poster'/>
                                </NavLink>
                                </div>
                                <div>
                                    <NavLink to={`/movie/${movie.imdbID}`}>
                                    <p className='movie-title'>{movie.Title}</p> 
                                    </NavLink>
                                    <p>{movie.Type}</p>
                                    <p>{movie.Year}</p> 
                                    <p className='fav-movie-icon'>
                                        fav
                                        <img onClick={() => this.handleAlert(movie)} src={fav} alt='fav'/>
                                    </p>
                                    {/* <p className={this.state.hidden ? 'fav-movie-icon-added' : 'fav-movie-icon'}><img src={addedfav} alt='added'/></p> */}
                                </div>

                            </ul>
                        </div>        
                )})):(<p>sorry</p>)/* Title en mayuscula porque en la Api aparece con mayuscula*/}
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
      addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
      getMoviesFavorite: () => dispatch(getMoviesFavorite())
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Card);