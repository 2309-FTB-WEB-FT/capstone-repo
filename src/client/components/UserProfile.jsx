import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { userId } = useParams(); // route parameter for the user ID
  const [userData, setUserData] = useState({
    username: 'John Doe', // Placeholder
    profilePhoto: 'https://shorturl.at/dxzM3', // Placeholder
    bio: 'This is my profile bio.', // Placeholder
    likedShows: [], // Placeholder
    pastReviews: [], // Placeholder
  });

  useEffect(() => {
    // Fetch user data 
  }, [userId]);

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-photo">
          <img src={userData.profilePhoto} alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>{userData.username}</h2>
          <p>{userData.bio}</p>
        </div>
      </div>
      <div className="liked-shows">
        <h3>Liked Shows</h3>
        {/* list of liked shows */}
        {userData.likedShows.map((show) => (
          <div key={show.id}>
            <p>{show.title}</p>
            <img src={show.image} alt={show.title} />
          </div>
        ))}
      </div>
      <div className="past-reviews">
        <h3>Past Reviews</h3>
        {/* list of past reviews */}
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
