import React, { useEffect, useState } from 'react';
import './Register.css';
import registerBg from '../../../images/register-bg.jpg';
import SocialButtons from '../SocialButtons/SocialButtons';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

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

    // get input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const nameOnBlur = e => {
        setNameClicked(false)
        setName(e.target.value);
    };
    const emailOnBlur = e => {
        setEmailClicked(false)
        setEmail(e.target.value);
    };
    const passwordOnBlur = e => {
        setPassClicked(false)
        setPassword(e.target.value);
    };
    const confPasswordOnBlur = e => {
        setConfPassClicked(false)
        setConfPassword(e.target.value);
    };

    // use react built-in hooks
    const navigate = useNavigate();

    // use react firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    useEffect( () => {
        if (user) {
            navigate('/home');
        }
    }, [user]);

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger mt-4'>{error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = e => {
        e.preventDefault();

        console.log(name, email, password, confPassword);
        createUserWithEmailAndPassword(email, password);


    }
    return (
        <div style={style} className='d-flex align-items-center justify-content-center'>
            <div className='register-box'>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${nameClicked || name ? 'clicked' : 'noclicked'}`} htmlFor="name">Name*</label>
                            <input onClick={() => setNameClicked(true)} onBlur={nameOnBlur} type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${emailClicked || email ? 'clicked' : 'noclicked'}`} htmlFor="email">Your Email*</label>
                            <input onClick={() => setEmailClicked(true)} onBlur={emailOnBlur} type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${passClicked || password ? 'clicked' : 'noclicked'}`} htmlFor="password">New Password*</label>
                            <input onClick={() => setPassClicked(true)} onBlur={passwordOnBlur} type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${confPassClicked || confPassword ? 'clicked' : 'noclicked'}`} htmlFor="confPassword">Confirm Password*</label>
                            <input onClick={() => setConfPassClicked(true)} onBlur={confPasswordOnBlur} type="password" name="confPassword" id="confPassword" />
                        </div>
                    </div>
                    <div>
                        <input onClick={() => setActiveCheck(!activeCheck)} className='me-2' type="checkbox" name="checkbox" id="checkbox" required />
                        <label htmlFor="checkbox">I agree to <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong></label>
                    </div>
                    {errorElement}
                    <div>
                        <input className='input-submit w-100 py-3' type="submit" value="Create Your Account" />
                    </div>
                </form>
                <div className='text-center my-3'>
                    <span className='fs-5 fw-bold'>or</span>
                </div>
                <SocialButtons></SocialButtons>
                <div>
                    <span className='me-2'>Already have an account?</span>
                    <Link className='signinup-link text-primary' to='/login'>Please Signin</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;