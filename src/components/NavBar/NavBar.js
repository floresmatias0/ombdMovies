import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'
import i18n from '../../i18n'
import { withTranslation } from 'react-i18next';
import './Navbar.css';

const NavBar = ({t}) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <header className="navbar">
            <div className='logoButton'>
                <NavLink exact to='/ombdMovies' >
                    <img id="logoHenry" src={Logo} className="d-inline-block align-top" alt="" />
                </NavLink>
                <button className="btn-en" onClick={() => changeLanguage('en')}>En</button>
                <button className="btn-es" onClick={() => changeLanguage('es')}>Es</button> 
            </div>

            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/home">{t('search')}</NavLink>
                        <NavLink exact to="/favs" >{t('favorites')}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default withTranslation()(NavBar)