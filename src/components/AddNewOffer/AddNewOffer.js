import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddNewOffer.css"

const AddNewOffer = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://fathomless-bastion-34681.herokuapp.com/newOffer", data)
            .then(res => {
                console.log(res.data);
                if (res?.data.acknowledged) {
                    alert("Successfully added a new offer.")
                    reset()
                }
            })
    };
    return (
        <div className="text-center">
            <h1 className="text-primary m-5">Add New Offer</h1>
            <div className="add-offer-form text-center">
                <form className="offer-add-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Offer Name" {...register("name", { required: true })} />
                    <input placeholder="Offer Price" {...register("price", { required: true })} />
                    <input placeholder="Date line" {...register("offer", { required: true })} />
                    <textarea placeholder="description" {...register("description", { required: true })} />
                    <input placeholder="Image URL" {...register("img", { required: true })} />
                    {errors.exampleRequired && <span>This form is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewOffer;