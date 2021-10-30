import React from 'react';
import "./AroundWorld.css"

const AroundWorld = () => {
    return (
        <div className="row around-container">
            <div className="col-lg-4 col-md-4 ">
                <img className="img-fluid" src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/SG-for-WTD-sm.jpg" alt="" />
            </div>
            <div className="col-lg-8 col-md-8">
                <div className="around-text">
                    <p>"Around the world, in countries at all development levels, many millions of jobs and businesses are dependent on a strong and thriving tourism sector. Tourism has also been a driving force in protecting natural and cultural heritage, preserving them for future generations to enjoy"</p>
                </div>
                <div className="float-end">
                    <h5>Mr. Zurab Pololikashvili</h5>
                </div>
            </div>

        </div>
    );
};

export default AroundWorld;