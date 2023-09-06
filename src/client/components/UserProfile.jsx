import React, { useState, useEffect } from 'react';
import './UserProfile.css';

//Profile
const UserProfile = ({ token }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profilePhoto: 'https://shorturl.at/dxzM3', 
    likedShows: [], 
    pastReviews: [],
  });
  const Token = localStorage.getItem('token');


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(Token)
        const response = await fetch('http://localhost:3000/api/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${Token}`, 
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData(result); 
        } else {
          console.error('API error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    };

    fetchUserData();
  }, [token]);


  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-photo">
          <img src='https://shorturl.at/dxzM3' alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
        </div>
      </div>
      <div className="liked-shows">
        <h3>Liked Shows</h3>
        {userData.likedShows && userData.likedShows.map((show) => (
          <div key={show.id}>
            <p>{show.title}</p>
            <img src={show.image} alt={show.title} />
          </div>
        ))}
      </div>
      <div className="past-reviews">
        <h3>Past Reviews</h3>
        {userData.pastReviews && userData.pastReviews.map((review) => (
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
