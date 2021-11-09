import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";
import Cookies from 'universal-cookie';

import "../assets/styles/landingpage.css";
import "../assets/styles/pagination.css";
import Navbar from "../common/navbar";

const LandingComponent = () => {
    const [dataResponse, setDataResponse] = useState([])
    const [errorResponse, setErrorResponse] = useState([])
    const [page, setPage] = useState(1);
    const [successResponse, setSuccessResponse] = useState([])
    const cookies = new Cookies();
    const token = cookies.get('token')
    const user_id = cookies.get('id')

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const getMenuItems = async () => {
        try {
            const res = await axios.get('https://sapplication.link/menu/items');
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
            user: user_id
        }

        try {
            const res = await axios.post(`https://sapplication.link/order/`, data, {
                headers: headers
            });
            setSuccessResponse(res.data.message)
            setTimeout(() => {
                getMenuItems()
                var errors = document.getElementById(`${id}-errors`);
                errors.innerHTML = ''
                var success = document.getElementById('success-response')
                success.innerHTML = ''
            }, 1200);
        }
        catch (error) {
            setErrorResponse('Something went wrong, try again later')
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
            <div class="container" id="menu-page">
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
                        <h3 class="error-response" id="error">{errorResponse ? `${errorResponse}` : ''}</h3>
                        <h3 class="success-response" id="success">{successResponse ? successResponse : ''}</h3>
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
                                   <Pagination
                            count={count}
                            size="large"
                            page={page}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                            className="pagination-button"
                        />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


export default LandingComponent;
