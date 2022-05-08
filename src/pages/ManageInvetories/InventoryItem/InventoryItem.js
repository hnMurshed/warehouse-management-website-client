import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({ item, handleRemove }) => {
    const { name, img, description, quantity, supplier, price, _id } = item;

    return (
        <div className='d-flex align-items-center justify-content-between my-3 border'>
            <div className='d-flex align-items-center gap-10'>
                <img style={{ width: '80px' }} src={img} alt={name} />
                <div className='d-flex align-items-center gap-10'>
                    <h5 className='m-0'>{name}</h5>
                    <span>Quantity: {quantity}kg</span>
                    <span>Price: ${price}</span>
                </div>
            </div>
            <div>
                <button onClick={ () => handleRemove(_id)} className='btn btn-danger rounded-pill me-3'>Remove</button>
            </div>
        </div>
    );
};

export default InventoryItem;