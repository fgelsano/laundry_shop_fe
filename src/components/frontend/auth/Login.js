import React, { useState } from 'react'
import '../../../assets/frontend/scripts'
import '../../../assets/frontend/style.css'
import NavbarFe from './../../../layout/frontend/NavbarFe'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import bg2 from '../../../assets/frontend/images/bg2.jpg'


function Login() {

  const history = useHistory();

  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/login`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success", res.data.message, "success");
          history.push('/');
        }
        else if (res.data.status === 401) {
          swal("Warning", res.data.message, "warning");
        }
        else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });

  }

  return (

    <section>
      <NavbarFe />
      <div className='registerLoginbox ' style={{ background: `url(${bg2})no-repeat` }}>

        <div className='form-box'>
          <div className='form-value'>
            <form onSubmit={loginSubmit}>
              <h2>Login</h2>
              <div className='inputbox'>
                <input type="email" name="email" className='inputInput' onChange={handleInput} value={loginInput.email} required />
                <label className='labelLabel'>Email</label>
                <span>{loginInput.error_list.email}</span>
              </div>

              <div className='inputbox'>
                <input type="password" name="password" className='inputInput' onChange={handleInput} value={loginInput.password} required/>
                <label className='labelLabel'>Password</label>
                <span>{loginInput.error_list.password}</span>
              </div>
              <div >
                <button type="submit" className='buttonButton' >Login</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>

    // <div>
    //   <NavbarFe />
    //   <div className="container py-5" id='registerBox'>
    //     <div className="row justify-content-center">
    //       <div className="col-ml-6">
    //         <div className="card">
    //           <div className="card-header">
    //             <h4>Login</h4>
    //           </div>
    //           <div className="card-body">
    //             <form onSubmit={loginSubmit}>

    //               <div className="form-group mb-3">
    //                 <label>Email</label>
    //                 <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control" />
    //                 <span>{loginInput.error_list.email}</span>
    //               </div>
    //               <div className="form-group mb-3">
    //                 <label>Password</label>
    //                 <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" required />
    //                 <span>{loginInput.error_list.password}</span>
    //               </div>
    //               <div className="form-group mb-3">
    //                 <button type="submit" className="btn btn-primary">Login</button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login
