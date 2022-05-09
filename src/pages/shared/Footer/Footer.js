import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../../images/icons/facebook-logo.png';

const Footer = () => {
    return (
        <div className='bg-black text-white py-5'>
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <div>
                    <h3>Vegetable House</h3>
                    <hr />
                    <p>Bibirhat, Fatcikchhari, Chittagram</p>
                    <p>Email: murshedbinamir@gmail.com</p>
                    <p>Mobile: 018xxxxxxxx</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <hr />
                    <div className='d-flex flex-column'>
                        <Link className='quick-link' to='/about'>About us</Link>
                        <Link className='quick-link' to='/contact'>Contact us</Link>
                        <Link className='quick-link' to='/terms'>Terms & Conditions</Link>
                        <Link className='quick-link' to='/privacy'>Privacy Policy</Link>
                    </div>
                </div>
                <div>
                    <h4>Stay connected with</h4>
                    <hr />
                    <div className="social-icons">
                        <img src={facebook} alt='Facebook' />
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center mt-5'>&copy; Copiwrite {new Date().getFullYear()} - Vegetable House</p>
        </div>
    );
};

export default Footer;