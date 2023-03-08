import React from 'react'
import NavbarFe from '../../layout/frontend/NavbarFe'
import Slider from './Slider'


function Home() {
  return (
    <div>
      <NavbarFe/>
      <Slider/>
      <div>

          <div className="container">
              <div className ="card mt-5">
                <div className="card-body">
            
                  <h1>WASH DRY & FOLD</h1>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home;
