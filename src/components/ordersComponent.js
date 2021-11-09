import React, { useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";
import Cookies from 'universal-cookie';

import "../assets/styles/table.css";
import "../assets/styles/pagination.css";
import Navbar from "../common/navbar";


const OrdersComponent = () => {
    const [dataResponse, setDataResponse] = useState([])
    const [page, setPage] = useState(1);
    const cookies = new Cookies();
    const token = cookies.get('token')
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const params = {
        "all_orders": "all_orders"
    }

    const getOrders = async () => {
        try {
            const res = await axios.get('https://sapplication.link/order/user', {
                headers: headers,
                params: params
            });
            setDataResponse(res.data.data)
        } catch (error) {
            setDataResponse([])
        }
    };
    // Fetch all user's orders...
    useEffect(() => {
        getOrders();
    }, []);


    // Handle change...
    const PER_PAGE = 6;
    const count = Math.ceil(dataResponse.length / PER_PAGE);
    const items = usePagination(dataResponse, PER_PAGE);
    const handleChange = (_e, p) => {
        setPage(p);
        items.jump(p);
    };


    return (

        <div>
            <Navbar />
            <div className="previous-order-table">
                {token ?
                    <div><table>
                        <caption>Past Orders</caption>
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
                            })}
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
                        /></div>
                    : <h3 className="login-req">Kindly log in to view your past orders</h3>}
            </div>
        </div>
    );
}


export default OrdersComponent;
