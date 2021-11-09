import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";
import Cookies from 'universal-cookie';

import "../assets/styles/table.css";
import SideBar from "../common/sidebar";


const AdminMenuComponent = () => {
    const [dataResponse, setDataResponse] = useState([])
    const [page, setPage] = useState(1);
    const cookies = new Cookies();
    const token = cookies.get('token')
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const getMenuItems = async () => {
        try {
            const res = await axios.get('https://sapplication.link/menu/items', {
                headers: headers
            });
            setDataResponse(res.data.data)
        } catch (error) {
            setDataResponse([])
        }
    };
    // Fetch all menu items...
    useEffect(() => {
        getMenuItems();
    });

    // Delete a user
    const onDelete = async (id) => {
        try {
            await axios.delete(`https://sapplication.link/menu/items/${id}`, {
                headers: headers
            });
            getMenuItems()
        }
        catch (error) {
            console.log(error)
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

        <div>
            <SideBar />
            <article class="all-users">
                <div className="previous-order-table">
                    <table>
                        <caption>MENU ITEMS</caption>

                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">ACTIONS</th>

                            </tr>
                        </thead>
                        <tbody>
                            {items.currentData().map((data) => {
                                return (
                                    <tr>
                                        <td data-label="NAME">{data.name}</td>
                                        <td data-label="PRICE">{data.price}</td>
                                        <td data-label="DESCRIPTION">{data.description}</td>
                                        <td><a href="#" class="delete">DELETE<span class="fa fa-check" onClick={() => onDelete(data.id)}></span></a>
                                        </td>
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
            </article>
        </div>
    );
}


export default AdminMenuComponent;
