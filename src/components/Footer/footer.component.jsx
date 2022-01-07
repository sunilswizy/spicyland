import React from "react";
import './footer.styles.scss'

const year = new Date().getFullYear()

const Footer = () => (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6 className="footer-heading">About</h6>
            <p className="text-justify">
            A <i> Spicy Land </i>, or, more informally, an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6 className="footer-heading">Categories</h6>
            <ul className="footer-links">
              <li><a className="footer-link" href='/'>Home</a></li>
              <li><a className="footer-link" href='/search'>Search</a></li>
              <li><a className="footer-link" href='/menu'>Menu</a></li>
              <li><a className="footer-link" href='/contact'>Contact</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><a className="footer-link" href='/'>About Us</a></li>
              <li><a className="footer-link" href='/'>Contact Us</a></li>
              <li><a className="footer-link" href='/'>Contribute</a></li>
              <li><a className="footer-link" href='/'>Privacy Policy</a></li>
              <li><a className="footer-link" href='/'>Copyright</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {year} All Rights Reserved by 
         <a className="footer-link" href="/"> Swizy</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="footer-link" className="facebook" href="/facebook"><i className="fab fa-facebook"></i></a></li>
              <li><a className="footer-link" className="twitter" href="/twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a className="footer-link" className="dribbble" href="/dribbble"><i className="fab fa-instagram"></i></a></li>
              <li><a className="footer-link" className="linkedin" href="/linkdin"><i className="fab fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
)

export default Footer;