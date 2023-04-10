import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const  tShirts = useLoaderData();
    return (
        <div>
            <h3>This is home.</h3>
            <h3>T-shirts are {tShirts.length}</h3>
        </div>
    );
};

export default Home;