import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryItem from './InventoryItem/InventoryItem';

const ManageInventories = () => {
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5001/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Manage Inventories</h2>
            <div>
                {
                    items.map(item => <InventoryItem 
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>
            <div className='text-center'>
                <button onClick={ () => navigate('/additem')} className='btn-add'>ADD NEW ITEM</button>
            </div>
        </div>
    );
};

export default ManageInventories;