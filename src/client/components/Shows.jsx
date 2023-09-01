import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import './ReviewForm.css';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  let { showId } = useParams();
  const navigate = useNavigate()
  const [singleShow, setSingleShow] = useState({})
 

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };

  useEffect(() => {
    async function fetchData() {
        try{
            const response = await fetch(`http://localhost:3000/api/shows/show/${showId}`)
            const result = await response.json();
            setSingleShow(result)
        } catch (error) {
            console.error(error)
        }
    } 
    fetchData()
}, [])    

  return (
    <div>
      <h1>{singleShow.name}</h1>
      <h2>{singleShow.genre}</h2>
      <img src={singleShow.image}></img>
      <div className='showdescription' dangerouslySetInnerHTML={{ __html: singleShow.description }}></div>
      <br />
      <button className="submit-button" onClick={handleWriteReview}>Write a Review</button>
      {showReviewForm && (
        <div className="overlay">
          <div className="popup">
            <button className="close-button" onClick={handleCloseReviewForm}>X</button>
            <ReviewForm singleShow={singleShow.name} onClose={handleCloseReviewForm} 
              />
          </div>
        </div>
      )}
    
      {/* Rest of the page content */}
    </div>
  );
};

export default Shows;
