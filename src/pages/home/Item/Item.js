import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { name, img, description, quantity, supplier, price } = item;
    return (
        <div className='item col'>
            <img className='w-100' src={img} alt="" />
            <h4 className='name mt-2'>{name}</h4>
            <span className='price fw-bold'>${price}</span>
            <p className='description mt-3'>{description}</p>
            <div className='item-footer'>
                <div className='d-flex align-items-center justify-content-between'>
                    <span><strong>Supplier: </strong>{supplier}</span>
                    <span><strong>Quantity: </strong>{quantity}kg</span>
                </div>
                <button className='btn-update w-100 py-2 border-0'>Update Stock</button>
            </div>
        </div>
    );
};

export default Item;