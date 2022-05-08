import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/items')
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
            <div className='text-end mt-3'>
                <Link className='link-btn' to='manageinventories'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Items;