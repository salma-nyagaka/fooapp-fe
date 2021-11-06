import React, { useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";

import "../assets/styles/table.css";
import "../assets/styles/pagination.css";
import "../assets/styles/actionbuttons.css";

import SideBar from "../common/sidebar";


const AllUsersComponent = () => {
    const [successResponse, setSuccessResponse] = useState()
    const [dataResponse, setDataResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [deleteError, setDeleteError] = useState()

    const headers = {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyZGF0YSI6eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIn0sImlhdCI6MTYzNjE5MzgwMiwibmJmIjoxNjM2MTkzNTAyLCJleHAiOjE2MzY3OTg2MDJ9.HT69RxFtv3gpElDzjbFU0GvZRssdX7bns2mR5aex-mc`,
    };

;

const getUsers = async () => {
    try {
        const res = await axios.get('http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/users/details', {
            headers: headers
        });
        setDataResponse(res.data.data)
        setSuccessResponse(res.data.message)


    } catch (error) {
        setDataResponse([])
        console.log(error);
    }
};
    // Fetch all users...
    useEffect(() => {
        getUsers();
    }, []);

    // Delete a user
    const onDelete = async (id) => {
        console.log(id, "id")

        try {
            const res = await axios.delete(`http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/users/details/${id}`, {
                headers: headers
            });
            getUsers()
            console.log(res, "resssssssssssss")
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
                            {items.currentData().map((data)  =>{
                                return(
                                <tr>
                                    <td data-label="USERNAME">{data.username}</td>
                                    <td data-label="EMAIL">{data.email}</td>
                                    <td data-label="ROLE">{data.role}</td>
                                    <td><a href="#" class="delete">DELETE<span class="fa fa-check" onClick={() => onDelete(data.id)}></span></a>
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
