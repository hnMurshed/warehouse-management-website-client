import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './inventory.css';

const Inventory = () => {
    const [item, setItem] = useState({});
    const { name, img, description, quantity, supplier, price, _id } = item;
    // const [upadateQuantity, setUpadateQuantity] = useState(quantity);
    const { itemId } = useParams();


    const { register, handleSubmit } = useForm();

    const getItem = async () => {
        const { data } = await axios.get(`https://glacial-taiga-42274.herokuapp.com/item/${itemId}`);
        setItem(data);
        console.log(data);
    }

    useEffect(() => {
        getItem();
    }, [])

    const handleDelivered = () => {
        const prevQuantity = parseInt(quantity);
        const newQuantity = prevQuantity - 1;

        const changeQuantity = async () => {
            const { data } = await axios.put(`https://glacial-taiga-42274.herokuapp.com/increase-quanity?id=${itemId}&updatedquantity=${newQuantity}`);
            console.log(data);

            if (data.modifiedCount === 1) {
                getItem();
            }
        }

        changeQuantity();
    }

    const onSubmit = (newStock, event) => {
        const newQuantity = parseInt(newStock.quantity);
        const upadateQuantity = parseInt(quantity) + newQuantity;

        const changeQuantity = async () => {
            const { data } = await axios.put(`https://glacial-taiga-42274.herokuapp.com/increase-quanity?id=${itemId}&updatedquantity=${upadateQuantity}`);
            console.log(data);

            if (data.modifiedCount === 1) {
                getItem();
            }
        }

        changeQuantity();
        event.target.reset();
    };

    return (
        <div className='container py-5'>
            <div className="row g-4">
                <div className="col-12 col-md-7">
                    <img className='w-100' src={img} alt={name} />
                </div>
                <div className="col-12 col-md-5">
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <p>Quantity: {quantity}kg</p>
                    <button onClick={handleDelivered} className='btn-delivered w-100 py-2 mb-2'>Delivered</button>
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex'>
                        <input className='w-100 p-2 rounded-0' type="number" placeholder='Quantity you want to stock' {...register("quantity", { required: true })} />
                        <input className='btn-import py-2' type="submit" value='Import Stock' />
                    </form>
                    <hr />
                    <h3 className='text-center'>DESCRIPTION</h3>
                    <p>{description}</p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span>Supplier: {supplier}</span>
                        <span>SOLD</span>
                    </div>
                    <div className='text-end mt-3'>
                        <Link className='link-btn' to='/manageinventories'>Manage Inventories</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;