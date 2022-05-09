import React from 'react';
import './Newsletter.css';
import bgImg from '../../../images/benner/banner-1.jpg';

const newsletterSectionStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '80px 0',
};

const Newsletter = () => {
    return (
        <div style={newsletterSectionStyle} className=''>
            <div className="newsletter mx-auto">
                <h2 className='text-center text-white mb-4'>Subscribe to our Newsletter</h2>
                <form>
                    <div className="input-group justify-content-center">
                        <input className='w-75 p-3' type="email" name="email" id="email" placeholder='Enter your email*' required />
                        <input style={{ backgroundColor: 'lightseagreen' }} className='text-white w-25' type="submit" value="Subscribe" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;