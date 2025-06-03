import React from 'react';
import VistroLogo from '../assets/VistroLogo';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle, MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';

function NavBar() {
    const token = localStorage.getItem("token"); // check login status

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom shadow-sm" style={{ height: "70px" }}>
            <div className="container-fluid">

                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <VistroLogo width="100" height="50" className="d-inline-block align-text-top" />
                </Link>

                {/* Toggler for mobile view */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

                    {/* Search Bar */}
                    <form className="d-flex w-100 justify-content-center my-2 my-lg-0" role="search">
                        <div className="input-group w-75">
                            <input
                                className="form-control bg-dark text-white border-secondary"
                                type="search"
                                placeholder="Search for anything..."
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                <MdSearch />
                            </button>
                        </div>
                    </form>

                    {/* Icons */}
                    <ul className="navbar-nav ms-auto d-flex align-items-center gap-3 fs-4">
                        <li className="nav-item">
                            <IoIosNotificationsOutline className="text-white" />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link p-0 text-white" to={token ? '/profile' : '/login'}>
                                <MdOutlineAccountCircle />
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
