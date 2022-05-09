import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import registerBg from '../../../images/register-bg.jpg';
import Loading from '../../shared/Loading/Loading';
import SocialButtons from '../SocialButtons/SocialButtons';

const style = {
    padding: '60px 0',
    backgroundImage: `url(${registerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const Login = () => {
    const [emailClicked, setEmailClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get email and password
    const emailOnBlur = e => {
        setEmailClicked(false);
        setEmail(e.target.value);
    }
    const passwordOnBlur = e => {
        setPassClicked(false);
        setPassword(e.target.value);
    }

    // use react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    // react built-in hooks
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    useEffect( () => {
        if (user) {
            navigate(from, {replace: true});
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault();
        
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div style={style} className='d-flex align-items-center justify-content-center'>
            <div className='register-box'>
                <h2 className='text-center mb-4'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-box border-normal">
                        <div className='w-100 relative'>
                            <label className={`${emailClicked || email ? 'clicked' : 'noclicked'}`} htmlFor="email">Your Email*</label>
                            <input onClick={() => setEmailClicked(true)} onBlur={emailOnBlur} type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="input-box border-normal mb-1">
                        <div className='w-100 relative'>
                            <label className={`${passClicked || password ? 'clicked' : 'noclicked'}`} htmlFor="password">Your Password*</label>
                            <input onClick={() => setPassClicked(true)} onBlur={passwordOnBlur} type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <span className='me-2'>Forgot your password?</span>
                        <span onClick={ async () => {
                            await sendPasswordResetEmail(email)
                            toast.success('An email sent to you, please check!')
                        }} className='signinup-link text-primary'>Please reset</span>
                    </div>
                    {errorElement}
                    <div>
                        <input className='input-submit w-100 py-3 mt-1' type="submit" value="Login Your Account" />
                    </div>
                </form>
                <div className='text-center my-3'>
                    <span className='fs-5 fw-bold'>or</span>
                </div>
                <SocialButtons></SocialButtons>
                <div>
                    <span className='me-2'>Don't have an account?</span>
                    <Link className='signinup-link text-primary' to='/register'>Please Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;