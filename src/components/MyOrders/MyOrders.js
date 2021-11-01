import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import ShowMyorder from '../ShowMyOrder/ShowMyOrder';
import "./MyOrders.css"

const MyOrders = () => {
    const [myAllOrder, setMyAllOrder] = useState([])
    const { user, isLoading } = useAuth()


    useEffect(() => {
        axios.get(`https://fathomless-bastion-34681.herokuapp.com/allclient/${user.displayName}`)
            .then(res => {
                const clients = (res.data);
                setMyAllOrder(clients);
            })
            .catch(error => console.log(error))

    }, [])

    return (
        <div className="order-contaimer">
            <div className="text-center m-5 text-primary">
                <h1>View your orders</h1>
            </div>
            <div className="text-center">
                {
                    isLoading ? <Spinner animation="border" variant="primary" /> : ""
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    myAllOrder.map(order => <ShowMyorder
                        order={order}
                        key={order._id}

                    ></ShowMyorder>)
                }
            </div>

        </div>
    );
};

export default MyOrders;