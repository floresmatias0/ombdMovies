import React, { Component } from "react";
import Card from './Card/Card'
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import {getMovies} from "../../actions"
import loading from "../../img/loading.gif"
import './Buscador.css';
import swal from "sweetalert";
export class Buscador extends Component {
  // Cuando usamos un componente de clase necesitamos un constructor y si o si llamar a super
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault(); //para que no se refresque la pagina
    if(!this.state.title){
      swal({
        text: 'This field can not be empty'
      })
    }else{
      this.props.getMovies(this.state.title) // para que busque lo que se escribio en el buscador en la accion getmovies de la Api
    }
  }

  render() {
    const { title } = this.state;
    const {t} = this.props
    return (
      <div className='full-container'>
        <div className='div-search'>
          <h1>{t('finder')}</h1>
          <div className='div-container'>
            <form className="form-search" onSubmit={(e) => this.handleSubmit(e)}>
              <label className="label" htmlFor="title">{t('movie')}</label>
              <input
                type="text"
                className="input-search"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
              <button className="button-search" type="submit">{t('search')}</button>
            </form>
          </div>
        </div>
        {this.props.loading ?(
            <div>
              <img className='loading-movie' src={loading} alt='loading...' />
            </div>
        ):(
          <Card/>
        )}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    loading: state.moviesLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(withTranslation()(Buscador));