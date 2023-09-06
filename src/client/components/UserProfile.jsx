import React, { useState, useEffect } from "react";
import "./UserProfile.css";

// component that displays user information
const UserProfile = ({ token }) => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profilePhoto: "https://shorturl.at/dxzM3", //default pfp
    likedShows: [],
    pastReviews: [],
  });
  
  const Token = localStorage.getItem("token"); // Get token from local storage

  //fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(Token);
        // Send a GET request to retrieve user data
        const response = await fetch("http://localhost:3000/api/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData(result); // Update user data with the fetched result
        } else {
          console.error("API error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    };

    fetchUserData();
  }, [token]);

  // Render the user profile
  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-photo">
          <img src="https://shorturl.at/dxzM3" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
        </div>
      </div>
      <div className="liked-shows">
        <h3>Liked Shows</h3>
        {userData.likedShows &&
          userData.likedShows.map((show) => (
            <div key={show.id}>
              <p>{show.title}</p>
              <img src={show.image} alt={show.title} />
            </div>
          ))}
      </div>
      <div className="past-reviews">
        <h3>Past Reviews</h3>
        {userData.pastReviews &&
          userData.pastReviews.map((review) => (
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
