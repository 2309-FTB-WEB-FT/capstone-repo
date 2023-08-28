import React, { useState } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import './ReviewForm.css';
import { useParams } from 'react-router-dom'

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  let { showId } = useParams();

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };

  return (
    <div>
      <h1>Explore Shows</h1>
      <p>Selected Show {showId}</p>
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
