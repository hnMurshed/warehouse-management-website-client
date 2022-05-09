import React from 'react';
import './OrganicVegetable.css';
import img1 from '../../../images/collection-2/collection2.1.jpg';
import img2 from '../../../images/collection-2/collection2.2.jpg';
import img3 from '../../../images/collection-2/collection2.3.jpg';
import img4 from '../../../images/collection-2/collection2.4.jpg';
import img5 from '../../../images/collection-2/collection2.5.jpg';
import img6 from '../../../images/collection-2/collection2.6.jpg';

const items = [
    { id: 1, img: img1, name: 'Leafy Green', text: 'Lettuce, spinach and silverbeet' },
    { id: 2, img: img2, name: 'Cruciferous', text: 'Cabbage, cauliflower, Brussels sprouts' },
    { id: 3, img: img3, name: 'Marrow', text: 'Pumpkin, cumumber and zucchini' },
    { id: 4, img: img4, name: 'Root', text: 'Patoato, sweet potaoto and yam' },
    { id: 5, img: img5, name: 'Edible Stems', text: 'Celery and sparagus' },
    { id: 6, img: img6, name: 'Allium', text: 'Onion, garlic and shallot' },
]

const OrganicVegetables = () => {
    return (
        <div className='py-5' style={{ backgroundColor: 'rgba(211, 211, 211, 0.3)' }}>
            <div className="container">
                <h2 className='text-center mb-3'>100% Organic Vegetables</h2>
                <div className="vege-containter">
                    {
                        items.map(item => <div
                            key={item.id}
                            className='text-center'
                        >
                            <img style={{ borderRadius: '50%' }} className='w-100' src={item.img} alt={item.name} />
                            <h3 className='mt-3'>{item.name}</h3>
                            <p>{item.text}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrganicVegetables;