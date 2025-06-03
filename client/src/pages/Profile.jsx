// components/Profile.jsx
import React, { useEffect, useState } from 'react';
import { getLoggedInUserApi } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getLoggedInUserApi();
        setUser(data.user); // API returns { user: {...} }
      } catch (error) {
        console.error("Error fetching user:", error.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

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
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
  );
}
