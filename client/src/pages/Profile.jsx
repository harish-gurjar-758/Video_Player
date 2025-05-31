import { useAuthStore } from '../store/useAuthStore';
import React, { useEffect } from 'react';

export default function Profile() {
  const { user, getLoggedInUser, loading } = useAuthStore();

  useEffect(() => {
    getLoggedInUser();
  }, []); // ✅ run only once on mount

  return (
    <div style={{ paddingTop: '70px' }}>
      {loading ? (
        <p>Loading user...</p>
      ) : user ? (
        <div>
          <h2>Hello, {user.username}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <img
            src={user.profilePic || '/default-profile.png'}
            alt="Profile"
            width={100}
            height={100}
          />
          {/* Add more user info if needed */}
        </div>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
  );
}
