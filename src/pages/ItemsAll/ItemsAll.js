import React, { useEffect, useState } from 'react';
import Item from '../home/Item/Item';

const ItemsAll = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://glacial-taiga-42274.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-4'>All Items</h2>
            <div className='items row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default ItemsAll;