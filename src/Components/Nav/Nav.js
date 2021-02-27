import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/home-images/logo.png'
import styles from './NavStyles'

const Nav = () => {
  return (
    <nav className="fix-top navbar navbar-expand-md navbar-dark bg-dark">
      <img src={logo} alt="letter b cube logo" className="logo" style={styles.logo}/>
      <a className="navbar-brand" href="/">
        <h3>Vincent Gines</h3>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
