import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);

        const insertItem = async () => {
            const response = await axios.post('http://localhost:5001/insertitem', data);

            if (response.data.insertedId) {
                toast.success('Your item is successfully added!');
            }
            console.log(response.data);
        }
        insertItem();

        // clear fields
        event.target.reset();
    };
    return (
        <div className='container my-5'>
            <div className='form-container mx-auto'>
                <h2 className='text-center mb-4'>Add New Item</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-100 mt-2' type='text' placeholder='Vegetable name*' {...register("name")} required />
                    <textarea className='w-100 mt-3' type='text' placeholder='Item description*' {...register("description")} required />
                    <input className='w-100 mt-2' type='number' placeholder='Item quantity*' {...register("quantity")} required />
                    <input className='w-100 mt-3' type='number' placeholder='Item price*' {...register("price")} required />
                    <input className='w-100 mt-3' type='text' placeholder='Supplier name*' {...register("supplier")} required />
                    <input className='w-100 mt-3' type='text' placeholder='Item photo URL*' {...register("img")} required />
                    <input className='w-100 mt-3' type="submit" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;