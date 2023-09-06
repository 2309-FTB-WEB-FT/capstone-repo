import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ReviewForm.css';


const ReviewForm = ({ onClose, singleShow }) => {
  const [reviewTitle, setReviewTitle] = useState(''); 
  const [reviewText, setReviewText] = useState('');
  const [bingeLength, setBingeLength] = useState('');
  const [bingeScale, setBingeScale] = useState('');

  const handleReviewTitleChange = (e) => {
    setReviewTitle(e.target.value);
  };

  const handleReviewChange = (text) => {
    setReviewText(text);
  };

  const handleBingeLengthChange = (e) => {
    setBingeLength(e.target.value);
  };

  const handleBingeScaleChange = (e) => {
    setBingeScale(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function postReview () {
    try {
      console.log(singleShow)
      const response = await fetch('http://localhost:3000/api/reviews/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            title: reviewTitle, 
            body: reviewText,
            showName: singleShow,
          })
        }) 
      } catch (err) {
        throw (err)
      }

  } 
  postReview()}
  
  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>X</button>
        <p>{singleShow}</p>
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={reviewTitle}
            onChange={handleReviewTitleChange}
            placeholder="Review Title"
          />
          <ReactQuill
            value={reviewText}
            onChange={handleReviewChange}
            placeholder="Write your review..."
            className="text-input"
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
          <button type="submit" className="submit-button" >Post Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
