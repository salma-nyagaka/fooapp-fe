import React, { useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";

import "../assets/styles/table.css";
import "../assets/styles/pagination.css";
import SideBar from "../common/sidebar";


const AllUsersComponent = () => {
    const [successResponse, setSuccessResponse] = useState()
    const [dataResponse, setDataResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [transactionData, setTransactionData] = useState([]);

    const headers = {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyZGF0YSI6eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIn0sImlhdCI6MTYzNjE4MzIxNCwibmJmIjoxNjM2MTgyOTE0LCJleHAiOjE2MzY3ODgwMTR9.v9RHTPRBXOrN_mGdDI3NM0z9n2CdRcWH8IdYhn-Fk-M`,

    };

;

    // Fetch all users...
    useEffect(() => {
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
        getUsers();
    }, []);

console.log(dataResponse.length)
  // Handle change...
  const PER_PAGE = 10;
  const count = Math.ceil(dataResponse.length / PER_PAGE);
  const items = usePagination(dataResponse, PER_PAGE);
  const handleChange = (_e, p) => {
    setPage(p);
    items.jump(p);
  };


  console.log(items, "items")
    return (

        <div>
            <SideBar />
            <article class="all-users">
                <div className="previous-order-table">
                    <h3 class="success-response" id="success-response">{successResponse ? successResponse : ''}</h3>
                    <table>
                        <caption>All users</caption>

                        <thead>
                            <tr>
                                {/* <th scope="col">ID</th> */}
                                <th scope="col">USERNAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ROLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.currentData().map((data)  =>{
                                return(
                                <tr>
                                    {/* <td data-label="ID">{data.id}</td> */}
                                    <td data-label="USERNAME">{data.username}</td>
                                    <td data-label="EMAIL">{data.email}</td>
                                    <td data-label="ROLE">{data.role}</td>
                                </tr>)
                               })   

                            }
{/* 
                            <tr>
                                <td scope="row" data-label="Acount">Visa - 3412</td>
                                <td data-label="Due Date">02/01/2016</td>
                                <td data-label="Amount">$842</td>
                                <td data-label="Period">01/01/2016 - 01/31/2016</td>
                            </tr> */}
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
