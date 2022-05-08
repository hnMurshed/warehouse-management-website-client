import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClose } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import auth from '../../../firebase.init';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const handleSignout = () => {

    }

    return (
        <div>
            <nav className="header navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <Link to='/' className="navbar-brand">Vegetable House</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=''>All Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=''>Blogs</Link>
                            </li>
                            {
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/additem'>Add Item</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/manageinventories'>Manage Inventories</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to=''>My Items</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        <div>
                            {
                                user ? <div className='profile-box d-flex align-items-center relative'>
                                    {
                                        <img onClick={ () => setShowProfile(true)} className='user-profile' src={user.photoURL} alt="" /> ||
                                        <div onClick={ () => setShowProfile(true)} className='user-profile profile-text'>
                                            <span>{user.displayName.slice(0, 1)}</span>
                                        </div>
                                    }
                                    <div onBlur={ () => setShowProfile(false)} className={`user-detail p-4 ${showProfile ? '' : 'scale-0'}`}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h4>My Profile</h4>
                                            <FontAwesomeIcon className='cursor-pointer' onClick={ () => setShowProfile(false)} icon={faClose}></FontAwesomeIcon>
                                        </div>
                                        <hr />
                                        <h5>{user.displayName}</h5>
                                        <p>{user.email}</p>
                                        <hr />
                                        <button onClick={handleSignout} className='btn bg-white w-100'>Sign Out</button>
                                    </div>
                                </div> :
                                    <Link to='/login' className='btn btn-login text-white'>Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;