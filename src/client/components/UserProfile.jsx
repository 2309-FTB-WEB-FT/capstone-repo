import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ token }) => {
  const { username: paramUsername } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profilePhoto: 'https://shorturl.at/dxzM3',
    likedShows: [],
    pastReviews: [],
  });
  const [username, setUsername] = useState(''); // Initialize username state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Use the username from the URL parameter or the one fetched from the server
        const targetUsername = paramUsername || username;

        const response = await fetch(`http://localhost:3000/api/users/${targetUsername}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData({
            ...result,
            likedShows: result.likedShows || [],
            pastReviews: result.pastReviews || [],
          });
        } else {
          // Handle API error
          console.error('API error');
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    };

    fetchUserData();
  }, [token, username, paramUsername]);

  useEffect(() => {
    // Fetch the username if it's not available in the URL parameter
    if (!paramUsername && token) {
      const fetchUsername = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/users/username', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const result = await response.json();
            setUsername(result.username);
          } else {
            // Handle API error
            console.error('API error');
          }
        } catch (error) {
          console.error('API request error:', error);
        }
      };

      fetchUsername();
    }
  }, [token, paramUsername]);

  return (
    <div className="user-profile">
      {/* ... */}
    </div>
  );
};

export default UserProfile;
