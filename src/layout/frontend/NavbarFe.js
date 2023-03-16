import React from 'react';
import logo1 from '../../assets/frontend/images/logo1.png';
import '../../assets/frontend/style.css';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


function NavbarFe() {

    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>

                </li>
            </ul>
        );
    }
    else {
        AuthButtons = (
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white" >Logout</button>

            </li>
        );
    }

    return (
       
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="logoContainer">
                <img src={logo1} alt="logo" className="logo-name1" />
            </div>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Laundry Shop Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link active" aria-current="page">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" className="nav-link active" aria-current="page">Order</Link>
                        </li>
                        
                       
                        {AuthButtons}
                        
                    </ul>
                    
                    
                </div>
            </div>
        </nav>

    )
}

export default NavbarFe;
