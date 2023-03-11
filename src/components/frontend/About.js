import React from 'react'
import NavbarFe from '../../layout/frontend/NavbarFe'
import './../../assets/frontend/style.css';
import FooterFe from './../../layout/frontend/FooterFe';
import imageA from'./../../assets/frontend/images/imageA.jpeg'


function About() {
  return (
    <div>
       <NavbarFe/>
       <div>
       <section className="mainsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12-text-center">
                      <p className="main-heading">Who We Are</p>
                      <h1 className="main-heading">We are your trusted laundry service company</h1>
                      <div className="underline mx-auto"> </div>
                      <h6 className="p-text">
                      From our intuitive customer journey to our unmatched technology,
                       our platform is designed to provide a fun and easy laundry experience.

                       The Laundry Project provides full-service for your laundry needs. 
                       We are committed to providing quality laundry and dry-cleaning services by using safe and gentle laundry detergents and dry-cleaning products. 
                       Our team is dedicated to handling your clothes with care. 
                       We pick up and drop off your clothes right at your place of work or your home.
                      </h6>
                     
                    </div>
                  </div>
                </div>
          </section>

          <section className="mainsection">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12-text-center">
                      <h1 className="main-heading">Our Laundry History</h1>
                      <div className="underline mx-auto"> </div>
                      <h6 className="p-text">
                      From our intuitive customer journey to our unmatched technology,
                       our platform is designed to provide a fun and easy laundry experience.
                       Inspired by a bold ambition to challenge the status quo. Through technology and innovation, 
                        we aim to pioneer customer centricity and excitement in a traditional industry.
                      </h6>
                     
                    </div>
                  </div>
                </div>
          </section>

          <section className="section bg-light text-black">
            <div className="container">
                <div className="row">
                    <div className="col-md text-center">
                        <h6>STRATEGY</h6>
                        <div className="underline mx-auto"></div>
                        <h6>
                        Increase your social presence and following
                        </h6>
                        <h6>
                          Improve your exterior look.
                        </h6>
                        <h6>
                        Sponsor a team or organization
                        </h6>
                        <h6>
                        Paid Advertising on Social Media.
                        </h6>
                    </div>
                    <div className="col-md text-center">
                        <h6>CUSTOMER</h6>
                        <div className="underline mx-auto"></div>
                        <h6>
                            Host a special event.
                        </h6>
                        <h6>
                            Join a community business group.
                        </h6>
                        <h6>
                            Partner with other local businesses. Improve your exterior look.
                        </h6>
                        <h6>
                            Improve your exterior look.
                        </h6>
                    </div>
                    </div>
                </div>
        </section>

        <section className="section bg-lightsalmon text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md text-center">
                        <h3>We make laundry easy, literally</h3>
                        <div className="underline mx-auto"></div>
                        <p>
                        From our intuitive customer journey to our unmatched technology,
                         our platform is designed to provide a fun and easy laundry experience.
                        </p>
                    </div>
                    <div className="col-md text-center">
                        <img src={imageA} alt="images"/>
                    </div>
                    </div>
                </div>
        </section>
     </div>
          <FooterFe/>
    </div>
  )
}

export default About
