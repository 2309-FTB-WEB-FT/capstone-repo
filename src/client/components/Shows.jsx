import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import './ReviewForm.css';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  let { showId } = useParams();
  const navigate = useNavigate()
 

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };

  useEffect(() => {
    async function fetchData() {
        try{
            const response = await fetch("http://localhost:3000/api/shows/show/id")
            const result = await response.json();
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }
    fetchData()
}, [])    

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
            <img src={showId.image}></img>
          </div>
        </div>
      )}
    <div className="showspage"> 
            {
                showsId.map((showsId) => {
                <div className="showreview" key={showsId.id}>
                        <img src={showId.image}></img>
                         <p>{showsId.name}</p>
                        <p>{showsId.genre}</p>
                        <div dangerouslySetInnerHTML={{ __html: showsId.description }}></div>                    </div>
                    
                
                })
            }
        </div>

      {/* Rest of the page content */}
    </div>
  );
};

export default Shows;
