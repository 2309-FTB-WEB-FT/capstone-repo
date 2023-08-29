import React, { useState } from 'react';
import ReviewForm from './ReviewForm'; 
import './ReviewForm.css';

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };

  return (
    <div>
      <h1>Explore Shows</h1>
      <button className="submit-button" onClick={handleWriteReview}>Write a Review</button>

      {showReviewForm && (
        <div className="overlay">
          <div className="popup">
            <button className="close-button" onClick={handleCloseReviewForm}>X</button>
            <ReviewForm onClose={handleCloseReviewForm} />
          </div>
        </div>
      )}

      {/* Rest of the page content */}
    </div>
  );
};

export default Shows;
