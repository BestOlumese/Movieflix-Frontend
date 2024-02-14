import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    const dataToSubmit = {
      ...formData // Any additional form data object here
    };
    history.push({
      pathname: '/search',
      state: {
        data: dataToSubmit,
      },
    }); // Redirect to new page
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData, // Keep existing form data
      [name]: value // Update form data for the input field that changed
    });
  }
  

  const custom_date = new Date().getFullYear();

  return (
    <footer>
        <div className="footer-top-wrap">
          <div className="container">
            <div className="footer-menu-wrap">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="footer-logo">
                    <Link to="/"><img src="/img/logo/logo.png" width={'170px'} alt="" /></Link>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="footer-menu">
                    <nav>
                      <ul className="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movie">cinema movie</Link></li>
                        <li><Link to="/streaming-now">now streaming</Link></li>
                        <li><Link to="/coming-soon">coming soon</Link></li>
                      </ul>
                      <div className="footer-search">
                        <form onSubmit={handleSubmit}>
                          <input type="text" id="search" name="search" placeholder="Find Favorite Movie" onChange={handleInputChange} />
                          <button><i className="fas fa-search" /></button>
                        </form>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-quick-link-wrap">
              <div className="row align-items-center">
                <div className="col-md-7">
                  {/* <div className="quick-link-list">
                    <ul>
                      <li><a href="/#">FAQ</a></li>
                      <li><a href="/#">Help Center</a></li>
                      <li><a href="/#">Terms of Use</a></li>
                      <li><a href="/#">Privacy</a></li>
                    </ul>
                  </div> */}
                </div>
                <div className="col-md-5">
                  <div className="footer-social">
                    <ul>
                      <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
                      <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © {custom_date}  All Rights Reserved By <Link to="">Cinemax</Link></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                {/* <div className="payment-method-img text-center text-md-right">
                  <img src="/img/images/card_img.png" alt="img" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer