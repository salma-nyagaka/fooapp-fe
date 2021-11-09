import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom'

import usePagination from "../common/pagination";
import "../assets/styles/table.css";
import "../assets/styles/pagination.css";
import "../assets/styles/actionbuttons.css";
import SideBar from "../common/sidebar";


const AllUsersComponent = () => {
    const [dataResponse, setDataResponse] = useState([])
    const [page, setPage] = useState(1);
    const cookies = new Cookies();
    const token = cookies.get('token')
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const role = cookies.get('role')
    let history = useHistory();
  
    if (role != 'ADMIN'){
        history.push('/')  
    }

    const getUsers = async () => {
        try {
            const res = await axios.get('https://sapplication.link/users/details', {
                headers: headers
            });
            setDataResponse(res.data.data)


        } catch (error) {
            setDataResponse([])
        }
    };
    // Fetch all users...
    useEffect(() => {
        getUsers();
    });

    // Delete a user
    const onDelete = async (id) => {
        try {
            await axios.delete(`https://sapplication.link/users/details/${id}`, {
                headers: headers
            });
            getUsers()
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
                    {/* <h3 class="success-response" id="success-response">{successResponse ? successResponse : ''}</h3> */}
                    <table>
                        <caption>All users</caption>

                        <thead>
                            <tr>
                                <th scope="col">USERNAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ROLE</th>
                                <th scope="col">ACTIONS</th>

                            </tr>
                        </thead>
                        <tbody>
                            {items.currentData().map((data) => {
                                return (
                                    <tr>
                                        <td data-label="USERNAME">{data.username}</td>
                                        <td data-label="EMAIL">{data.email}</td>
                                        <td data-label="ROLE">{data.role}</td>
                                        <td><a href="#" class="delete" onClick={() => onDelete(data.id)}>DELETE<span class="fa fa-close"></span></a>
                                            {/* <a href="#" class="update">UPDATE <span class="fa fa-close"></span></a> */}
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


export default AllUsersComponent;
