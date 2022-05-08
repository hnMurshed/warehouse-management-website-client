import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { name, img, description, quantity, supplier, price, _id } = item;
    return (
        <div className='item col'>
            <div className='d-flex flex-column'>
                <img className='w-100' src={img} alt="" />
                <h4 className='name mt-2'>{name}</h4>
                <span className='price fw-bold'>${price}</span>
                <span><strong>Quantity: </strong>{quantity}kg</span>
                <span><strong>Supplier: </strong>{supplier}</span>
                <p className='description mt-3'>{description.slice(0, 100)}...</p>
            </div>
            <div className=''>
                <Link to={`/inventory/${_id}`} className='btn-update w-100 py-2 border-0'>Update Stock</Link>
            </div>
        </div>
    );
};

export default Item;