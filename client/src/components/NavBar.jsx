import React from 'react';
import VistroLogo from '../assets/VistroLogo';
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineAccountCircle, MdSearch } from "react-icons/md";

function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-dark text-white fixed-top py-2 border-bottom"
            style={{ height: "70px" }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">

                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <VistroLogo width="100" height="50" className="d-inline-block align-text-top" />
                </a>

                {/* Search Bar */}
                <form className="d-flex justify-content-center me-3 w-100" role="search">
                    <div className='form-control d-flex bg-dark'
                        style={{
                            width: "60%"
                        }}
                    >
                        <input
                            className="form-control me-2 bg-dark text-white "
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            <MdSearch />
                        </button>
                    </div>
                </form>

                {/* Icons: Notifications and Profile */}
                <div className="d-flex align-items-center gap-3 fs-4">
                    <div>
                        <IoIosNotifications />
                    </div>
                    <div>
                        <MdOutlineAccountCircle />
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
