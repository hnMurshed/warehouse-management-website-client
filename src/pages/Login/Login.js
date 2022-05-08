import React, { useState } from 'react';
import registerBg from '../../images/register-bg.jpg';

const style = {
    padding: '60px 0',
    backgroundImage: `url(${registerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const Login = () => {
    const [emailClicked, setEmailClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);
    return (
        <div style={style} className='d-flex align-items-center justify-content-center'>
            <div className='register-box'>
                <h2 className='text-center mb-4'>Login</h2>
                <form>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${emailClicked ? 'clicked' : 'noclicked'}`} htmlFor="email">Your Email*</label>
                            <input onClick={() => setEmailClicked(true)} onBlur={() => setEmailClicked(false)} type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${passClicked ? 'clicked' : 'noclicked'}`} htmlFor="password">Your Password*</label>
                            <input onClick={() => setPassClicked(true)} onBlur={() => setPassClicked(false)} type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div>
                        <input className='input-submit w-100 py-3 mt-1' type="submit" value="Login Your Account" />
                    </div>
                </form>
                <div className='text-center my-3'>
                    <span className='fs-5 fw-bold'>or</span>
                </div>
            </div>
        </div>
    );
};

export default Login;