import React, { useState } from 'react';
import VistroLogo from '../assets/VistroLogo';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle, MdSearch } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import videoData from '../assets/testData/videosData.json';

function NavBar() {
    const token = localStorage.getItem("token");
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const filteredVideos = videoData.filter(video =>
            video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.channelName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // For now: log results to console
        console.log("Search Results:", filteredVideos);

        // Optional: redirect to a results page with query or store in state management
        // navigate(`/search?query=${searchQuery}`); // if you implement a SearchResults page
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom shadow-sm"
            style={{
                height: "70px",
                backgroundColor: "#00000096",
                backdropFilter: "blur(5px)"
            }}
        >
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
                <div className="justify-content-between d-flex justify-content-center" id="navbarContent" style={{ width: "40%" }}>

                    {/* Search Bar */}
                    <form
                        className="w-100 d-flex justify-content-center my-2 my-lg-0"
                        role="search"
                        onSubmit={handleSearch}
                    >
                        <div className="input-group w-100">
                            <input
                                className="form-control bg-dark text-white border-secondary"
                                type="search"
                                placeholder="Search for anything..."
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                <MdSearch />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Icons */}
                <div>
                    <ul className="navbar-nav ms-auto d-flex align-items-center gap-3 fs-4">
                        <li className='nav-item'>
                            <Link className='nav-link p-0 text-white' to='/create-video'>
                                <button type="button" className="btn btn-outline-success"
                                    style={{
                                        fontSize: "14px",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >Create +</button>
                            </Link>
                        </li>
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
