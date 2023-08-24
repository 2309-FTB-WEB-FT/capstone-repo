import React, { useState } from 'react';

const ReviewForm = () => {
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
  
  const handleSubmit = () => {
    // Logic to submit the review (API integration will be added later)
  };
  
  return (
    <div>
      <textarea
        value={reviewText}
        onChange={handleReviewChange}
        placeholder="Write your review here..."
        style={{ fontStyle: 'italic', textDecoration: 'underline', fontWeight: 'bold' }}
      />
      <input
        type="text"
        value={bingeLength}
        onChange={handleBingeLengthChange}
        placeholder="Binge Length"
      />
      <select value={bingeScale} onChange={handleBingeScaleChange}>
        <option value="">Binge Scale (1-5)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleSubmit}>Post Review</button>
    </div>
  );
};

export default ReviewForm;
