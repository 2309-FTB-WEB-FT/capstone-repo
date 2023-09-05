import React, { useState, useEffect } from 'react';
import './UserProfile.css';

//Profile
const UserProfile = ({ token }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profilePhoto: 'https://shorturl.at/dxzM3', //Default pfp
    likedShows: [], //Set to be an empty array bc our users don't have these right now
    pastReviews: [],
  });
  const Token = localStorage.getItem('token');

  //The fetch call is the part that I honestly don't know how to do?
  //Should I even be making an API call if the token is what I'm trying to use?
  //I'm not sure how the tokens are set up in the database
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

  // The HTML for the profile
  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-photo">
          <img src={userData.profilePhoto} alt="Profile" />
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
