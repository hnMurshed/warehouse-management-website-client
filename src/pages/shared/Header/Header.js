import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
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
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-15px">
                            <li className="nav-item">
                                <CustomLink to='/' className="nav-link active" aria-current="page">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to='/all-items'>All Items</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to='/blogs'>Blogs</CustomLink>
                            </li>
                            {
                                user && <>
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to='/additem'>Add Item</CustomLink>
                                    </li>
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to='/manageinventories'>Manage Inventories</CustomLink>
                                    </li>
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to='/my-items'>My Items</CustomLink>
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