import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import HomeVideosList from './sections/HomeVideosList';
import NewsFeed from './sections/NewsFeed';
import Trending from './sections/Trending';
import Playlist from './sections/Playlist';
import Following from './sections/Following';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');

    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return <HomeVideosList />;
            case 'newsfeed':
                return <NewsFeed />;
            case 'trending':
                return <Trending />;
            case 'playlist':
                return <Playlist />;
            case 'following':
                return <Following />;
            default:
                return <HomeVideosList />;
        }
    };

    return (
        <div
            className="d-flex h-100 vh-100 overflow-hidden bg-secondary bg-gradient"
            style={{ paddingTop: "70px" }}
        >
            <Sidebar onSelect={setActiveSection} className="position-fixed-top" />
            {/* Scrollable render section */}
            <div
                style={{
                    flex: 1,
                    height: "calc(100vh - 70px)",
                    overflowY: "auto",
                    // paddingRight: "20px",
                }}
            >
                {renderSection()}
            </div>
        </div>
    );
}
