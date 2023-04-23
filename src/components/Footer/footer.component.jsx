import React from "react";
import './footer.styles.scss'

import { Link } from "react-router-dom";

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
              <li><Link className="footer-link" to='/'>Home</Link> </li>
              <li><Link className="footer-link" to='/search'>Search</Link></li>
              <li><Link className="footer-link" to='/shop'>Menu</Link> </li>
              <li><Link className="footer-link" to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to='/' className="footer-link">About Us</Link></li>
              <li><Link to='/' className="footer-link">Contact Us</Link></li>
              <li><Link to='/' className="footer-link">Contribute</Link></li>
              <li><Link to='/' className="footer-link">Privacy Policy</Link></li>
              <li><Link to='/' className="footer-link">Copyright</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {year} All Rights Reserved by 
         <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/sunil_swizy/"> Swizy</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="footer-link facebook" to="/facebook"><i className="fab fa-facebook"/></Link></li>
              <li><Link className="footer-link twitter" to="/twitter"><i className="fab fa-twitter"/></Link></li>
              <li><Link className="footer-link dribbble" to="/dribbble"><i className="fab fa-instagram"/></Link></li>
              <li><Link className="footer-link linkedin" to="/linkdin"><i className="fab fa-linkedin"/></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
)

export default Footer;