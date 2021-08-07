import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './p.jpg'

const Home = () => {
    return (
    <>
        <section className="container">
          <nav className="mainbar">
              <div className="headline">
                 <h1> We Have The Best Deal For Parking Lots!!</h1>
                 <h2> Instantly book your space today</h2>
                    <header className="searchbar">
                     <div className="searchbar__item" id="navbar-link">
                         <NavLink to="">Select Car Parking<i className="uil uil-angle-down"></i></NavLink>
                     </div>
                     <div className="searchbar__item" id="navbar-link">
                         <input className="client__name" type="text" name="" id="" placeholder="Your Name"/>
                     </div>
                     <div className="searchbar__item" id="navbar-link">
                         <input type="number" placeholder="Your number"/>
                     </div> 
                      <NavLink to="./Sign" className="btn" id="btn-link">
                         <input type="button" value="Request a Call"/>
                     </NavLink>
                     </header>
                </div>
              </nav>
             </section>

           <section className="main">
              <div className="main-content">
                  {/* <img src="./p.jpg" alt="" /> */}
                <img src={logo} alt="" className="main-img"/>
                <div className="main-about">
                    <h1>Why Choose ParkingZone</h1>
                    <hr />
                    <small>Short Stay and Valet parking options are just a few minutes' walk away from the terminal. if
                    you're
                    opting for Long Stay,the car is park just 10min away by bus and shuttles run every 10-20
                    minutes</small>
                </div>
              </div>
              <div className="main-content-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5698605918346!2d77.27507321458599!3d28.612678191731245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35b9975b1fb%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1628258028467!5m2!1sen!2sin"
                        width="1000" height="450"  allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
                <div className="main-blocks">
                    <div className="main-block-content">
                        <div className="main-block-icon"><i className="uil uil-wallet"></i>
                        </div>
                        <div className="main-block-item">
                            <h1>Save Money</h1>
                            <small>Save up to 70% on our site compared to the cost of on-airport parking.</small>
                        </div>
                    </div>

                    <div className="main-block-content">
                            <div><i className="uil uil-wallet"></i>
                            </div>
                             <div className="main-block-item">
                                <h1>Save Money</h1>
                                <small>Save up to 70% on our site compared to the cost of on-airport parking.</small>
                            </div>
                    </div>
                     <div className="main-block-content">
                         <div className="main-block-icon"><i className="uil uil-wallet"></i>
                         </div>
                             <div className="main-block-item">
                                <h1>Save Money</h1>
                                <small>Save up to 70% on our site compared to the cost of on-airport parking.</small>
                            </div>
                         </div>
                     </div>
                
</section>


<section className="parking-container">
        <h1 className="parking-title">Parking Options and Rate</h1>
        <div className="parking-rate">
            <div className="parking-rate-manu ">
                <div className="parking-manu">
                    <h3>$</h3>
                    <h1>30</h1>
                    <small>/day</small>
                </div>
                <h2>Primium</h2>
                <small>This plan includes all of the services that come with a parking space!</small>
                <div className="btn parking-btn" id="btn-link">
                    <input type="button" value="Learn More"/>
                </div>
            </div>

            <div className="parking-rate-manu">
                <div className="parking-manu">
                    <h3>$</h3>
                    <h1>18</h1>
                    <small>/day</small>
                </div>
                <h2>Standerd</h2>
                <small>Get the unlimited time and a regular parking spot at one of the lots.</small>
                <div className="btn parking-btn" id="btn-link">
                    <input type="button" value="Learn More"/>
                </div>
            </div>

            <div className="parking-rate-manu">
                <div className="parking-manu">
                    <h3>$</h3>
                    <h1>13</h1>
                    <small>/day</small>
                </div>
                <h2>Basic</h2>
                <small>A limited plan perfect for a short stay with random parking spots</small>
                <div className="btn parking-btn" id="btn-link">
                    <input type="button" value="Learn More"/>
                </div>
            </div>

            <div className="parking-rate-manu">
                <div className="parking-manu">
                    <h3>$</h3>
                    <h1>6</h1>
                    <small>/day</small>
                </div>
                <h2>Economy</h2>
                <small>Get a spot for parking at the time of arrival. No concierge services</small>
                <div className="btn parking-btn" id="btn-link">
                    <input type="button" value="Learn More"/>
                </div>
            </div>
        </div>
    </section>

    <section className="parking-pre">
        <div className="pre-title">
            <h1 className="prename">Save Money by pre-booking online</h1>
        </div>
        <div className="btn pre-btn" id="btn-link">
            <input type="button" value="peak your parking date"/>
        </div>
    </section>

    <footer className="footer">
        <div className="footer-container">
            <div className="footer-container-item">
                <div className="footer-list">
                    <div className="footer-logo">
                        <p><i className="uil uil-map-marker"></i>ParkingZone</p>
                    </div>
                    <small>We are the official providers of Airport parking. <div>you can't park close!</div></small>
                    <div className="footer-logo-btn">
                        <a href="#" className="footer-store">
                            <div className="footer-store-logo">
                                <div><i className="uil uil-apple-alt"></i></div>
                            </div>
                            <div className="footer-store-item">
                                <p>Download On </p>
                                <h3>APP STORE</h3>
                            </div>
                        </a>
                        <a href="#" className="footer-store">
                            <div className="footer-store-logo">
                                <div><i className="uil uil-google-play"></i>
                                </div>
                            </div>
                            <div className="footer-store-item">
                                <p>Android App On</p>
                                <h3>PLAY STORE</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer-list">
                    <div className="footer-logo">
                        <p>Contact Info</p>
                    </div>
                </div>
                <div className="footer-list">
                    <div className="footer-logo">
                        <p>ParkingZone</p>
                    </div>
                </div>


            </div>
        </div>
    </footer>
</>

    )

}

export default Home
