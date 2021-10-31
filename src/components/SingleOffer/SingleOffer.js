import React from 'react';
import { Link } from 'react-router-dom';
import './SingleOffer.css'

const SingleOffer = (props) => {
    const { img, name, description, price, offer, _id } = props.offer
    return (
        <div className="col ">
            <div className="card single-card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>{offer}</h6>
                        <h4>BDT {price}</h4>
                    </div>
                    <p className="card-text">{description}</p>
                    <div className="text-center mt-5">
                        {/* <Link to="/bookingnow">Booking Now</Link> */}
                        <Link to={`/bookingnow/${_id}`}><button className="btn btn-success">Booking Now</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleOffer;