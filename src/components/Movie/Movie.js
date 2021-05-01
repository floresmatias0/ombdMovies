import React from 'react';
import { connect } from 'react-redux';
import { getMoviesDetail } from '../../actions/index';
import imgDefault from '../../img/default.png'

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMoviesDetail(movieId);
    }

    render() {
        return (
            <div className="container-movie-detail">
                <div className='movie-card-detail'>
                    <div className='container'>
                        <div className='photo-cnt'>
                            <div className='details'>
                                <div className='title'>{this.props.movie.Title} <span>{this.props.movie.Rated}</span></div>
                                    <div>{this.props.movie.Year}</div>
                            </div>
                        </div>
                        <div className='column'>
                            <p>{this.props.movie.Plot}</p>
                        </div>
                        <div className='container2'>
                            <div className='img'>
                                <img alt='poster' src={this.props.movie.Poster === "N/A" ? imgDefault : this.props.movie.Poster}></img>
                            </div>
                            <ul>
                                <li>Director: {this.props.movie.Director}</li>
                                <li>BoxOffice: {this.props.movie.BoxOffice}</li>
                                <li>imdbRating: {this.props.movie.imdbRating}</li>
                                <li>Genre: {this.props.movie.Genre}</li>
                            </ul>
                        </div>
                </div>

            </div>
        </div>  
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getMoviesDetail: title => dispatch(getMoviesDetail(title))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Movie);