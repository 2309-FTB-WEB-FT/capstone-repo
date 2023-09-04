import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ token, username }) => {
  const { username: paramUsername } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profilePhoto: 'https://shorturl.at/dxzM3',
    likedShows: [],
    pastReviews: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Use the username from the URL parameter or the one passed as a prop
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

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-photo">
          <img src="https://shorturl.at/dxzM3" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>{userData.name}</h2>
        </div>
      </div>
      <div className="liked-shows">
        <h3>Liked Shows</h3>
        {userData.likedShows.map((show) => (
          <div key={show.id}>
            <p>{show.title}</p>
            <img src={show.image} alt={show.title} />
          </div>
        ))}
      </div>
      <div className="past-reviews">
        <h3>Past Reviews</h3>
        {userData.pastReviews.map((review) => (
          <div key={review.id}>
            <p>Review for: {review.showTitle}</p>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
