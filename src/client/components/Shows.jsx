import React, { useState } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false); // State to track whether the review form should be shown

  const handleWriteReview = () => {
    setShowReviewForm(true); // Set the state to show the review form
  };

  return (
    <div>
      <h1>Explore Shows</h1>
      {/* "Write a review" button */}
      <button onClick={handleWriteReview}>Write a Review</button>
      
      {/* Conditionally render the review form */}
      {showReviewForm && (
        <div className="overlay">
          <div className="popup">
            <button className="close-button" onClick={() => setShowReviewForm(false)}>Close</button>
            <ReviewForm />
          </div>
        </div>
      )}
      
      {/* Rest of the page content */}
    </div>
  );
};

export default Shows;

