import React, { useState } from 'react';
import './Register.css';
import registerBg from '../../images/register-bg.jpg';

const style = {
    padding: '60px 0',
    backgroundImage: `url(${registerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const Register = () => {
    const [nameClicked, setNameClicked] = useState(false);
    const [emailClicked, setEmailClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);
    const [confPassClicked, setConfPassClicked] = useState(false);
    const [activeCheck, setActiveCheck] = useState(false);
    console.log(activeCheck);
    return (
        <div style={style} className='d-flex align-items-center justify-content-center'>
            <div className='register-box bg-white'>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <form>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${nameClicked ? 'clicked' : 'noclicked'}`} htmlFor="name">Name*</label>
                            <input onClick={() => setNameClicked(true)} onBlur={() => setNameClicked(false)} type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${emailClicked ? 'clicked' : 'noclicked'}`} htmlFor="email">Your Email*</label>
                            <input onClick={() => setEmailClicked(true)} onBlur={() => setEmailClicked(false)} type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${passClicked ? 'clicked' : 'noclicked'}`} htmlFor="password">New Password*</label>
                            <input onClick={() => setPassClicked(true)} onBlur={() => setPassClicked(false)} type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${confPassClicked ? 'clicked' : 'noclicked'}`} htmlFor="confPassword">Confirm Password*</label>
                            <input onClick={() => setConfPassClicked(true)} onBlur={() => setConfPassClicked(false)} type="password" name="confPassword" id="confPassword" />
                        </div>
                    </div>
                    <div>
                        <input onClick={ () => setActiveCheck(!activeCheck)} className='me-2' type="checkbox" name="checkbox" id="checkbox" required />
                        <label htmlFor="checkbox">I agree to <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong></label>
                    </div>
                    <div>
                        <input className='input-submit w-100 py-3' type="submit" value="Create Your Account" />
                    </div>
                </form>
                <div className='text-center my-3'>
                    <span>or</span>
                </div>
            </div>
        </div>
    );
};

export default Register;