import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import Pagination from "@material-ui/lab/Pagination";

import "../assets/styles/foodattendantdashboard.css";
import "../assets/styles/table.css";
import SideBar from "../common/sidebar";
import usePagination from "../common/pagination";

const FoodComponent = () => {
    const [successResponse, setSuccessResponse] = useState()
    const [dataResponse, setDataResponse] = useState([])
    const cookies = new Cookies();
    const token = cookies.get('token')
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    // console.log(headers, "token")
    const params = {
        'pending_orders': 'pending_orders'
    }


    const getOrders = async () => {
        try {
            const res = await axios.get('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/order/all', {
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
    // Fetch all orders...
    useEffect(() => {
        getOrders();
    }, []);

    // Update order status
    const updateOrderStatus = async (id, status) => {
        console.log(headers, "Lll")
        const params = {
            status: status
        }
        try {
            const res = await axios.put(`http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/order/${id}`, {}, {
                headers: headers,
                params: params
            });
            getOrders()


        } catch (error) {
            setDataResponse([])
            console.log(error);
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
        <div class='attendant-page'>
            <section>
                <SideBar />
                <article>
                    <div className="previous-order-table">
                        <table>
                            <caption>All Customer Orders</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Food Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {items.currentData().map((data) => {
                                    return (
                                        <tr>
                                            <td scope="row" data-label="CUSTOEMR NAME">{data.user.username}</td>
                                            <td data-label="FOOD NAME">{data.order.name}</td>
                                            <td data-label="DESCRIPTION">${data.order.description}</td>
                                            <td data-label="PRICE">{data.order.price}</td>
                                            <td data-label="Period"><center>
                                                <a href="#" class="accept" onClick={() => updateOrderStatus(data.id, "accepted")}>ACCEPT <span class="fa fa-check"></span></a>
                                                <a href="#" class="deny" onClick={() => updateOrderStatus(data.id, "declined")}>DENY <span class="fa fa-close"></span></a>
                                            </center>
                                            </td>
                                        </tr>
                                    )
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
                </article>
            </section>

        </div>
    );
}


export default FoodComponent;
