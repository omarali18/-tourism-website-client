import axios from 'axios';
import React from 'react';

const ManageSingleOrders = (props) => {
    const { name, ciry, country, offerName, OfferPrice, _id, email } = props.order

    const deleteMySingleOrder = (id) => {
        const responce = window.confirm('Are you sure you want to delete id?')
        if (responce) {
            axios.delete(`https://fathomless-bastion-34681.herokuapp.com/clientorder/${id}`)
                .then(res => {
                    const deleteConform = (res?.data.deletedCount);
                    if (deleteConform) {
                        alert("Delete successfully.")
                        window.location.reload();
                        // history.push("/myorder")
                    }
                })
        }

    }
    return (
        <div className="col ">
            <div className="card order-card">
                <div className="card-body">
                    <h2 className="card-title"><span className="text-success">Client Name: </span>{name}</h2>

                    <h4><span className="text-success">Email: </span>{email}</h4>
                    <h4><span className="text-success">Country: </span>{country}</h4>
                    <h4><span className="text-success">ciry: </span>{ciry}</h4>
                    <h3><span className="text-success">Offer Name: </span> {offerName}</h3>

                    <p className="card-text ">Offer Price BDT {OfferPrice}</p>
                    <div className="text-center mt-5">
                        <button onClick={() => deleteMySingleOrder(_id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleOrders;