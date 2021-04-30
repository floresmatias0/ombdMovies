import React, { Component } from "react";
import Card from './Card/Card'
import { connect } from "react-redux";
import './Buscador.css';
import {getMovies} from "../../actions"
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
    this.props.getMovies(this.state.title) // para que busque lo que se escribio en el buscador en la accion getmovies de la Api
  }

  render() {
    const { title } = this.state;
    return (
      <div className='full-container'>
        <div className='div-search'>
          <h1>Buscador</h1>
          <div className='div-container'>
            <form className="form-search" onSubmit={(e) => this.handleSubmit(e)}>
              <label className="label" htmlFor="title">Película: </label>
              <input
                type="text"
                className="input-search"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
              <button className="button-search" type="submit">Buscar</button>
            </form>
          </div>
        </div>
        {this.props.movies && this.props.movies.length > 0?(
          <Card/>
        ):(
        <p>realiza una busqueda para que aparezcan los resultados...</p>
        )}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
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
  )(Buscador);