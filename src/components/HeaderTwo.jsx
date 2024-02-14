import React,{ useEffect, useState } from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';


const HeaderTwo = () => {

  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    const dataToSubmit = {
      ...formData // Any additional form data object here
    };
    history.push({
      pathname: '/search/',
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

  useEffect(()=>{




    /*=============================================
      =    		Mobile Menu			      =
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($('.menu-area li.menu-item-has-children ul').length) {
      $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }
    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
    
      var mobileMenuContent = $('.menu-area .main-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    
      //Dropdown Button
      $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });
      //Menu Toggle Btn
      $('.mobile-nav-toggler').on('click', function () {
        $('body').addClass('mobile-menu-visible');
      });
    
      //Menu Toggle Btn
      $('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
        $('body').removeClass('mobile-menu-visible');
      });
    }
    
    /*=============================================
      =     Menu sticky & Scroll to top      =
    =============================================*/
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
    
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });
    
    
    /*=============================================
      =    		 Scroll Up  	         =
    =============================================*/
    if ($('.scroll-to-target').length) {
      $(".scroll-to-target").on('click', function () {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 1000);
    
      });
    }
    
      },[])
  return (
    <header className="header-style-two">
    <div id="sticky-header" className="menu-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
            <div className="menu-wrap">
              <nav className="menu-nav show">
                <div className="logo">
                  <Link to="/">
                    <img src="/img/logo/logo.jpg" width={'170px'} alt="Logo" />
                  </Link>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li className="active menu-item-has-children"><Link to="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children"><Link to='/movie'>Cinema Movie</Link>
                    </li>
                    <li><Link to='/streaming-now'>Now Streaming</Link></li>
                    <li><Link to='/coming-soon'>Coming Soon</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>contacts</Link></li>
                  </ul>
                </div>
                <div className="header-action d-none d-md-block">
                  <ul>
                    <li className="d-none d-xl-block">
                      <div className="footer-search">
                        <form onSubmit={handleSubmit}>
                          <input type="text" id="search" name="search" placeholder="Find Favorite Movie" onChange={handleInputChange} />
                          <button type="submit"><i className="fas fa-search" /></button>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* Mobile Menu  */}
            <div className="mobile-menu">
              <div className="close-btn"><i className="fas fa-times" /></div>
              <nav className="menu-box">
                <div className="nav-logo"><a href="/#"><img src="/img/logo/logo.png" alt=""  /></a>
                </div>
                <div className="menu-outer">
                  {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                </div>
                <div className="social-links">
                  <ul className="clearfix">
                    <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                    <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                    <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                    <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                    <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-backdrop" />
            {/* End Mobile Menu */}
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default HeaderTwo