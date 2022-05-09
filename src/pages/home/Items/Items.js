import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Items = () => {
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://glacial-taiga-42274.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container py-5'>
            <h2 className='text-center'>Our Items</h2>
            <div className='items row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3'>
                <button onClick={ () => navigate('/all-items')} className='btn btn-primary px-5 me-2'>View All</button>
                <Link className='link-btn m-0' to='/manageinventories'>
                    <span className='me-2'>Manage Inventories</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
            </div>
        </div>
    );
};

export default Items;