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
            className="d-flex h-full rounded-lg overflow-hidden gap-30"
            style={{ paddingTop: "70px" }}
        >
            <Sidebar onSelect={setActiveSection} />
            <div style={{ marginLeft: "20px", flex: 1 }}>
                {renderSection()}
            </div>
        </div>
    );
}
