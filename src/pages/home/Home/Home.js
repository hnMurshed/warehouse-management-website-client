import React from 'react';
import Benner from '../Benner/Benner';
import Items from '../Items/Items';
import OrganicVegetables from '../OrganicVegetables/OrganicVegetables';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Items></Items>
            <OrganicVegetables></OrganicVegetables>
        </div>
    );
};

export default Home;