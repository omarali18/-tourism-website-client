import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageSingleOrders from '../ManageSingleOrders/ManageSingleOrders';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([])
    useEffect(() => {
        axios.get("https://fathomless-bastion-34681.herokuapp.com/ManageAllOrders")
            .then(res => {
                setAllOrder(res.data);
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1>Manage all Offer</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    allOrder.map(order => <ManageSingleOrders
                        order={order}
                        key={order._id}
                    ></ManageSingleOrders>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;