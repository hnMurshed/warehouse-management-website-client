import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">Vegetable House</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                        <Link className="nav-link" to=''>Add Item</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to=''>Manage Items</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to=''>My Items</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        <div>
                            {
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