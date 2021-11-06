import React, { useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";

import "../assets/styles/table.css";
import "../assets/styles/pagination.css";
import Navbar from "../common/navbar";


const OrdersComponent = () => {
    const [successResponse, setSuccessResponse] = useState()
    const [dataResponse, setDataResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [deleteError, setDeleteError] = useState()

    const headers = {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyZGF0YSI6eyJpZCI6MTYsImVtYWlsIjoiYWRtampiaW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJiampqYmIiLCJyb2xlIjoiQURNSU4ifSwiaWF0IjoxNjM2MTk2OTUwLCJuYmYiOjE2MzYxOTY2NTAsImV4cCI6MTYzNjgwMTc1MH0._R3YzAAz-tq2DR6L8413YkVOTx2xCMF_tYK6Pjof15A`,
    };

    const params = {
        "all_orders": "all_orders"
    }

    const getOrders = async () => {
        try {
            const res = await axios.get('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/order/user', {
                headers: headers,
                params: params
            });
            setDataResponse(res.data.data)
            setSuccessResponse(res.data.message)


        } catch (error) {
            setDataResponse([])
            console.log(error);
        }
    };
    // Fetch all user's orders...
    useEffect(() => {
        getOrders();
    }, []);


    // Handle change...
    const PER_PAGE = 10;
    const count = Math.ceil(dataResponse.length / PER_PAGE);
    const items = usePagination(dataResponse, PER_PAGE);
    const handleChange = (_e, p) => {
        setPage(p);
        items.jump(p);
    };

    console.log(items.currentData())


    return (

        <div>
            <Navbar />
            <div className="previous-order-table">
                {/* <h3 class="success-response" id="success-response">{successResponse ? successResponse : ''}</h3> */}
                <table>
                    <caption>All users</caption>

                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.currentData().map((data) => {
                            return (
                                <tr>
                                    <td data-label="NAME">{data.order.name}</td>
                                    <td data-label="PRICE">{data.order.price}</td>
                                    <td data-label="DESCITPION">{data.order.description}</td>

                                </tr>)
                        })

                        }

                    </tbody>
                </table>
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
    );
}


export default OrdersComponent;
