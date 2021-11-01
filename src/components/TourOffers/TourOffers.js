import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import SingleOffer from '../SingleOffer/SingleOffer';
import "./TourOffers.css"

const TourOffers = () => {
    const [offers, setOffers] = useState([])
    const { isLoading } = useAuth()
    useEffect(() => {
        fetch("http://localhost:5000/tourOffer")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className="offer-contaimer">
            <hr className="top" />
            <div className="text-center offer-container-text">
                <h1 >NOW CHOOSE YOUR PLAN</h1>
            </div>
            <div className="text-center">
                {
                    isLoading ? <Spinner animation="border" variant="primary" /> : ""
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    offers.map(offer => <SingleOffer
                        key={offer._id}
                        offer={offer}
                    />)
                }
            </div>
            <hr className="btm" />
        </div>
    );
};

export default TourOffers;