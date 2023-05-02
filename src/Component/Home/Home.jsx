import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NewsCards></NewsCards>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;