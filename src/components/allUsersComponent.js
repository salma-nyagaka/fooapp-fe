import React from "react";
import "../assets/styles/table.css";
import SideBar from "../common/sidebar";


const AllUsersComponent = () => {
    return (
        <div>
            <SideBar />
            <article>
            <div className="previous-order-table">
                <table>
                    <caption>All user orders</caption>
                    <thead>
                        <tr>
                            <th scope="col">Account</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account">Visa - 3412</td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount">$1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="Acount">Visa - 3412</td>
                            <td data-label="Due Date">02/01/2016</td>
                            <td data-label="Amount">$842</td>
                            <td data-label="Period">01/01/2016 - 01/31/2016</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </article>
        </div>
    );
}


export default AllUsersComponent;
