import React from "react";
import Logo from "../../Assets/images/Logo.png"
import {
    FaHome,
    FaChartPie,
    FaUserFriends,
    FaMapMarked
} from "react-icons/fa";

import {
    GiMilkCarton
} from "react-icons/gi";

import {
    HiDocumentReport
} from "react-icons/hi"
const Sidebar = props => {
    return (
        <div className="col-auto col-md-3 col-xl-2 " style={{"backgroundColor" : "#3B5999"}}> 
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src = {Logo} alt = "logo" />
                    <span className="fs-5 d-none d-sm-inline align-middle">DairyDev</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0 text-white">
                           <FaHome /> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white">
                            <FaChartPie /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/farmers" className="nav-link px-0 align-middle text-white">
                            <FaUserFriends /> <span className="ms-1 d-none d-sm-inline">Farmers</span>
                        </a>
                    </li>
                    <li>
                        <a href="/new-batch" className="nav-link px-0 align-middle text-white">
                            <GiMilkCarton /> <span className="ms-1 d-none d-sm-inline">Create New Batch</span>
                        </a>
                    </li>
                    <li>
                        <a href="/report" className="nav-link px-0 align-middle text-white">
                            <HiDocumentReport /> <span className="ms-1 d-none d-sm-inline">Generate Report</span>
                        </a>
                    </li>
                    <li>
                        <a href="/tracking" className="nav-link px-0 align-middle text-white">
                            <FaMapMarked /> <span className="ms-1 d-none d-sm-inline">Tracking</span>
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="/profile" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">Username</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="/">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;