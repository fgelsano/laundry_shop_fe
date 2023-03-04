import React from 'react'
import { Link } from 'react-router-dom';
import NavbarFe from '../../../layout/frontend/NavbarFe';

function Register() {
  return (
    <div>
      <NavbarFe />
      <div classNameName="container py-5">
        <div className="row justify-content-center">
          <div className="col-ml-6">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                      <label>First Name</label>
                      <input type="text" class="form-control" value="" required />
                  </div>
                  <div className="form-group mb-3">
                      <label>Last Name</label>
                      <input type="" class="form-control" value="" required />
                  </div>
                  <div className="form-group mb-3">
                      <label>Address</label>
                      <input type="" class="form-control" value="" required />
                  </div>
                  <div className="form-group mb-3">
                      <label>Contact</label>
                      <input type="" class="form-control" value="" required />
                  </div>
                  <div className="form-group mb-3">
                      <label>Email</label>
                      <input type="" class="form-control" value="" required />
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Register
