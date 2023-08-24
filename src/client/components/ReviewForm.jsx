import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onClose }) => {
  const [reviewText, setReviewText] = useState('');
  const [bingeLength, setBingeLength] = useState('');
  const [bingeScale, setBingeScale] = useState('');

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleBingeLengthChange = (e) => {
    setBingeLength(e.target.value);
  };

  const handleBingeScaleChange = (e) => {
    setBingeScale(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the review (API integration will be added later)
  };

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>Close</button>
        <form className="review-form" onSubmit={handleSubmit}>
          <textarea
            className="text-input"
            placeholder="Write your review..."
            value={reviewText}
            onChange={handleReviewChange}
            required
          />
          <input
            type="text"
            value={bingeLength}
            onChange={handleBingeLengthChange}
            placeholder="Binge Length"
          />
          <div className="dropdown">
            <select value={bingeScale} onChange={handleBingeScaleChange}>
              <option value="">Binge Scale (1-5)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Post Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
