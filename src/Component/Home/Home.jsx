import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NewsCards></NewsCards>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;