import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's stylesheet
import './ReviewForm.css';

const ReviewForm = ({ onClose }) => {
  const [reviewText, setReviewText] = useState('');
  const [bingeLength, setBingeLength] = useState('');
  const [bingeScale, setBingeScale] = useState('');

  const handleReviewChange = (newContent) => {
    setReviewText(newContent);
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
        <button className="close-button" onClick={onClose}>X</button>
        <form className="review-form" onSubmit={handleSubmit}>
          <ReactQuill
            value={reviewText}
            onChange={handleReviewChange}
            placeholder="Write your review..."
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
