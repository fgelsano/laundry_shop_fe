import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from '../../assets/frontend/images/logo1.png';
import '../../assets/frontend/style.css'

function NavbarFe() {
    return (
       
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="logoContainer">
                <img src={logo1} alt="logo" className="logo-name1" />
            </div>
            <div className="container-fluid">
                <Link to="/" class="navbar-brand">Laundry Shop Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" class="nav-link active" aria-current="page">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" class="nav-link active" aria-current="page">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" class="nav-link active" aria-current="page">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                      
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
       
    )
}

export default NavbarFe;
