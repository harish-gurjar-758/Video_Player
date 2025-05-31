import React from 'react';

export default function Sidebar({ onSelect }) {
    return (
        <aside className="bg-dark text-white p-2 fixed-top-70" style={{ width: "200px", minHeight: "100vh" }}>
            <ul className="nav flex-column gap-3">
                <h6 className="nav-item" onClick={() => onSelect('home')} style={{ cursor: 'pointer' }}>
                    🏠 Home
                </h6>
                <h6 className="nav-item" onClick={() => onSelect('newsfeed')} style={{ cursor: 'pointer' }}>
                    📰 NewsFeed
                </h6>
                <h6 className="nav-item" onClick={() => onSelect('trending')} style={{ cursor: 'pointer' }}>
                    🔥 Trending
                </h6>
                <h6 className="nav-item" onClick={() => onSelect('playlist')} style={{ cursor: 'pointer' }}>
                    📂 Playlist
                </h6>
                <h6 className="nav-item" onClick={() => onSelect('following')} style={{ cursor: 'pointer' }}>
                    👥 Following
                </h6>
            </ul>
        </aside>
    );
}
