import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = ({ token }) => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    username: 'John Doe',
    profilePhoto: 'https://shorturl.at/dxzM3',
    bio: 'This is my profile bio.',
    likedShows: [],
    pastReviews: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        setUserData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [token, userId]);

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
