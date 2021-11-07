import React, { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

import "../assets/styles/userform.css";
import SideBar from "../common/sidebar";

const MenuComponent = () => {

    const [nameerror, setNameError] = useState()
    const [priceerror, setPriceError] = useState()
    const [descriptionerror, setDescriptionError] = useState()
    const [successResponse, setSuccessResponse] = useState()

    // Create a new user...
    const handleSubmit = async(event) => {
        event.preventDefault();
        const { name, price, description } = event.target.elements;

        const data = {
            name: name.value,
            price: price.value,
            description: description.value
        }
        const cookies = new Cookies();
        const token = cookies.get('token')
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        try {
            const res = await axios.post('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/menu/', data, {
                headers: headers
            });
            setSuccessResponse(res.data.message)
        }
        catch (error) {
            setNameError(error.response.data.error.name[0])
            console.log(error.response.data.error)
            setDescriptionError(error.response.data.error.description[0])

        }

        var form = document.getElementById("form");
        form.reset();
    };
    const inboxOnClick = (event) => {
        event.preventDefault()
        const id = event.target.id
        var errors = document.getElementById( `${id}-errors`);
        errors.innerHTML = ''
        var success = document.getElementById('success-response')
        success.innerHTML = ''
        // errors.remove();

    }
    return (
        <div>
            <SideBar/>
            <article>
            <div class="container">
                <h1>Add a menu item</h1>
                <form onSubmit={handleSubmit} id="form">
                <h3 class="success-response" id="success-response">{successResponse ? successResponse : ''}</h3>
                <label for="name"><b>Name</b></label>
                <h3 class="errors" id="name-errors">{nameerror ? nameerror : ''}</h3>
                <input type="text" placeholder="Enter Name" name="name" id="name" onClick={inboxOnClick}  required />
                <label for="price"><b>Price</b></label>
                <h3 class="errors" id="price-errors">{priceerror ? priceerror : ''}</h3>
                <input type="number" placeholder="Enter Price" name="price" id="price" onClick={inboxOnClick}  required />
                <label for="description"><b>Description</b></label>
                <h3 class="errors" id="description-errors">{descriptionerror ? descriptionerror : ''}</h3>
                <textarea id="description" name="description" rows="4" cols="50" onClick={inboxOnClick}  required >
                </textarea>  <hr />

                <button type="submit" class="registerbtn">Add menu item</button>
            </form>
            </div>
            </article>
        </div>
    );
}


export default MenuComponent;
