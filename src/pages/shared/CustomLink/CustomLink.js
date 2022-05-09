import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

const CustomLink = ({ to, children }) => {
    const resolved = useResolvedPath(to);
    const matched = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link
            className='text-decoration-none me-2 custom-link'
            to={to}
            style={{ color: matched && 'white', borderBottom: matched && '2px solid white' }}
        >
            {children}
        </Link>
    );
};

export default CustomLink;