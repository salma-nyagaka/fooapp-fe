import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";
import Cookies from 'universal-cookie';

import "../assets/styles/landingpage.css";
import Navbar from "../common/navbar";

const LandingComponent = () => {
    const [dataResponse, setDataResponse] = useState([])
    const cookies = new Cookies();
    const token = cookies.get('token')
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const getMenuItems = async () => {
        try {
            const res = await axios.get('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/menu/items');
            setDataResponse(res.data.data)

        } catch (error) {
            setDataResponse([])
        }
    };
    // Fetch all menu items...
    useEffect(() => {
        getMenuItems();
    }, []);

    // Add an order
    const makeOrder = async (id) => {
        const data = {
            order: id,
            user: "16"
        }

        try {
            await axios.post(`http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/order/`, data, {
                headers: headers
            });
        }
        catch (error) {
            console.log(error)
        }


    };

    // Handle change...
    const PER_PAGE = 10;
    const items = usePagination(dataResponse, PER_PAGE);
    // const handleChange = (_e, p) => {
    //     items.jump(p);
    // };


    return (
        <div className="banner">
            <Navbar />
            <div class="container">
                <section id="popular" class="module">
                    <div class="container">

                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                                <div class="module-header wow fadeInUp animated" >
                                    <h2 class="module-title">Menu Items</h2>
                                    <h3 class="module-subtitle">Our most popular dishes</h3>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-sm-6">
                                {items.currentData().map((data) => {
                                    return (
                                        <div class="menu">
                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <h4 class="menu-title">{data.name}</h4>
                                                    <div class="menu-detail">{data.description}</div>
                                                    <a href="#" class="update" onClick={() => makeOrder(data.id)}>ORDER</a>
                                                </div>
                                                <div class="col-sm-4 menu-price-detail">
                                                    <h4 class="menu-price">Ksh {data.price}</h4>
                                                </div>
                                                <div class="col-sm-8 menu-price-detail">
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


export default LandingComponent;
