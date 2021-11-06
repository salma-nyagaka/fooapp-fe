import React, { useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";

import "../assets/styles/landingpage.css";
import Navbar from "../common/navbar";

const LandingComponent = () => {
    const [successResponse, setSuccessResponse] = useState()
    const [dataResponse, setDataResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [deleteError, setDeleteError] = useState()

    const headers = {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyZGF0YSI6eyJpZCI6MTYsImVtYWlsIjoiYWRtampiaW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJiampqYmIiLCJyb2xlIjoiQURNSU4ifSwiaWF0IjoxNjM2MTk1MjY3LCJuYmYiOjE2MzYxOTQ5NjcsImV4cCI6MTYzNjgwMDA2N30.-eXFz2LG2wiTcK7n_Ei5TlrW_m6UqWkml-4WvfXPA6A`,
    };

    ;

    const getMenuItems = async () => {
        try {
            const res = await axios.get('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/menu/items', {
                headers: headers
            });
            setDataResponse(res.data.data)
            setSuccessResponse(res.data.message)


        } catch (error) {
            setDataResponse([])
            console.log(error);
        }
    };
    // Fetch all menu items...
    useEffect(() => {
        getMenuItems();
    }, []);

    // // Add an order
    const makeOrder = async (id) => {
        console.log(id, "id")
        const data = {
            order: id,
            user: "16"
        }

        try {
            const res = await axios.post(`http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/order/`, data, {
                headers: headers
            });
            console.log(res, "make order")
        }
        catch (error) {
            setDeleteError(error.response.data.error)
        }


    };

    // Handle change...
    const PER_PAGE = 10;
    const count = Math.ceil(dataResponse.length / PER_PAGE);
    const items = usePagination(dataResponse, PER_PAGE);
    const handleChange = (_e, p) => {
        setPage(p);
        items.jump(p);
    };


    return (
        <div className="banner">
            <Navbar />

            {/* <div class="flex-container-outside">
                <div class="flex-item-left">1</div>
                <div class="flex-item-center">
                    <div class="flex-container">
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
                                <div class="inner">
                                           <div class="menu">
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <h4 class="menu-title">{data.name}</h4>
                                                        <div class="menu-detail">{data.description}</div>
                                                    </div>
                                                    <div class="col-sm-4 menu-price-detail">
                                                        <h4 class="menu-price">Ksh {data.price}</h4>
                                                    </div>
                                                    <div class="col-sm-8 menu-price-detail">
                                                    <a href="#" class="update" onClick={() => makeOrder(data.id)}>ORDER</a>
                                                    </div>
                                                </div>
                                            </div>
                
                                </div>
                            )})}
                            </div>
                            </div>    </div>
                    </section>

                    </div>
                </div>

                <div class="flex-item-right">
                    <table>
                        <tr>
                            <th>FOOD ITEM</th>
                            <th>PRICE</th>
                        </tr>


                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                        </tr>
                    </table>
                </div>
            </div> */}
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
                                        )})}

                                </div>

                            </div>



                            {/* <div class="row">
                                <div class="col-sm-6 col-sm-offset-3">
                                    <div class="devider">
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </section>
                </div>
            {/* </header> */}
        </div>
    );
}


export default LandingComponent;
