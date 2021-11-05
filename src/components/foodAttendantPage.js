import React from "react";
import "../assets/styles/foodattendantdashboard.css";
import "../assets/styles/table.css";

import Navbar from "../common/navbar";

const foodAttendantPage = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="previous-order-table">
                <table>
                    <caption>All Customer Orders</caption>
                    <thead>
                        <tr>
                            <th scope="col">Account</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account">Visa - 3412</td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount">$1,190</td>
                            <td data-label="Period"><center>
                                <a href="#" class="accept">ACCEPT <span class="fa fa-check"></span></a>
                                <a href="#" class="deny">DENY <span class="fa fa-close"></span></a>
                            </center>
                            </td>                        </tr>
                        <tr>
                            <td scope="row" data-label="Account">Visa - 6076</td>
                            <td data-label="Due Date">03/01/2016</td>
                            <td data-label="Amount">$2,443</td>
                            <td data-label="Period"><center>
                                <a href="#" class="accept">ACCEPT <span class="fa fa-check"></span></a>
                                <a href="#" class="deny">DENY <span class="fa fa-close"></span></a>
                            </center>
                            </td>                        </tr>
                        <tr>
                            <td scope="row" data-label="Account">Corporate AMEX</td>
                            <td data-label="Due Date">03/01/2016</td>
                            <td data-label="Amount">$1,181</td>
                            <td data-label="Period"><center>
                                <a href="#" class="accept">ACCEPT <span class="fa fa-check"></span></a>
                                <a href="#" class="deny">DENY <span class="fa fa-close"></span></a>
                            </center>
                            </td>                        </tr>
                        <tr>
                            <td scope="row" data-label="Acount">Visa - 3412</td>
                            <td data-label="Due Date">02/01/2016</td>
                            <td data-label="Amount">$842</td>
                            <td data-label="Period"><center>
                                <a href="#" class="accept">ACCEPT <span class="fa fa-check"></span></a>
                                <a href="#" class="deny">DENY <span class="fa fa-close"></span></a>
                            </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default foodAttendantPage;
