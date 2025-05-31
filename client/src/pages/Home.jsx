import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import HomeVideosList from './HomeVideosList';
import NewsFeed from './NewsFeed';
import Trending from './Trending';
import Playlist from './Playlist';
import Following from './Following';

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
            className="d-flex h-full rounded-lg overflow-hidden gap-30"
            style={{ paddingTop: "70px" }}
        >
            <Sidebar onSelect={setActiveSection} />
            <div style={{ marginLeft: "200px", flex: 1 }}>
                {renderSection()}
            </div>
        </div>
    );
}
