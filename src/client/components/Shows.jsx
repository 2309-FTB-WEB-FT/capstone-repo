import React, { useState } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import './ReviewForm.css';

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  return (
    <div>
      <h1>Explore Shows</h1>
      <button onClick={handleWriteReview}>Write a Review</button>

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
