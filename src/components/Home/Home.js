import React from 'react';
import AroundWorld from '../AroundWorld/AroundWorld';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenueBar from '../MenueBar/MenueBar';
import Offer from '../Offer/Offer';
import TourOffers from '../TourOffers/TourOffers';

const Home = () => {
    return (
        <div>
            <MenueBar />
            <Banner />
            <AroundWorld />
            <TourOffers />
            <Offer />
            <Footer />
        </div>
    );
};

export default Home;