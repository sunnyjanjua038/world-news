import React from 'react'
import './Home.css'
import { Link, Outlet } from 'react-router-dom'


const AnotherNavbar = () => {
  return (
<>

    <nav className="navbar navbar-expand-lg navbar-light bg-light sixondnavbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Today News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/us">US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Ploitics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/world">Wrold</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Science</Link>
        </li><li className="nav-item">
          <Link className="nav-link" to="/politics">COVID-19</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Climate Change</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Originals
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Contect Us</Link>
        </li>
        </ul>
    </div>
    
  </div>
 
</nav>


</>
  )
}

export default AnotherNavbar
