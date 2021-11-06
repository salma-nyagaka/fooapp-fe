import React, { useEffect, useState, SetStateAction } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../common/pagination";

import "../assets/styles/table.css";
import SideBar from "../common/sidebar";


const AdminMenuComponent = () => {
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

    // Delete a user
    const onDelete = async (id) => {
        console.log(id, "id")

        try {
            const res = await axios.delete(`http://ec2-18-203-249-202.eu-west-1.compute.amazonaws.com/menu/items/${id}`, {
                headers: headers
            });
            getMenuItems()
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
                            {items.currentData().map((data)  =>{
                                return(
                                <tr>
                                    <td data-label="NAME">{data.name}</td>
                                    <td data-label="PRICE">{data.price}</td>
                                    <td data-label="DESCRIPTION">{data.description}</td>
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


export default AdminMenuComponent;
