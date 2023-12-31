import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

import "./ReviewForm.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Shows = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  let { showId } = useParams();
  const [singleShow, setSingleShow] = useState({});

  const handleWriteReview = () => {
    setShowReviewForm(true);
  };

  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/shows/show/${showId}`
        );
        const result = await response.json();
        setSingleShow(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="single-show-container">
      <h1 className= "single-show-title">{singleShow.name}</h1>
      <img className= "single-show-image" src={singleShow.image}></img>
      <h2 className= "single-show-genre">{singleShow.genre}</h2>
      <div
        className="showdescription"
        dangerouslySetInnerHTML={{ __html: singleShow.description }}
      ></div>
      <br />
      <button className="submit-button" onClick={handleWriteReview}>
        Write a Review
      </button>
      {showReviewForm && (
        <div className="overlay">
          <div className="popup">
            <button className="close-button" onClick={handleCloseReviewForm}>
              X
            </button>
            <ReviewForm
              singleShow={singleShow.id}
              onClose={handleCloseReviewForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shows;
