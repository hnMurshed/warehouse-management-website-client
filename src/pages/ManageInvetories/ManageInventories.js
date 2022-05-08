import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import InventoryItem from './InventoryItem/InventoryItem';

const ManageInventories = () => {
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5001/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleRemove = id => {
        const confirm = window.confirm('Are you sure you want to remove this item?');

        const deleteItem = async () => {
            const response = await axios.delete(`http://localhost:5001/deleteitem/${id}`);

            if (response.data.deletedCount === 1) {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                toast.success('Item successfully removed!');
            } 
            console.log(response.data);
        }

        if (confirm) {
            deleteItem();
        }
    }
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Manage Inventories</h2>
            <div>
                {
                    items.map(item => <InventoryItem 
                        key={item._id}
                        item={item}
                        handleRemove={handleRemove}
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