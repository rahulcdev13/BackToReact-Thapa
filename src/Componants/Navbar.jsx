import React from 'react'  
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <> 
         <nav className="navbar navbar-expand-lg bg-light">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link> */}
              <Link to="/" className="nav-item nav-link">About</Link>
              <Link to="contact" className="nav-item nav-link">Contact</Link>
              <Link to="home" className="nav-item nav-link">User</Link>
              <Link to="NpmCounter" className="nav-item nav-link">Counter</Link>
              <Link to="searchFilter" className="nav-item nav-link">Search Live Filter</Link>
              <Link to="NpmCounter" className="nav-item nav-link disabled">Others</Link>
            </div>
          </div>
        </nav><hr/> 
    </>
  )
}

export default Navbar