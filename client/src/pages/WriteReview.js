import React from "react";
import Header from "../components/Header";
import ReviewForm from "../components/ReviewForm";

function WriteReview() {
    // check if user is logged in
    if (!localStorage.getItem("id")) {
        //Todo: redirect to login page
    }
    return  (
      <div className="write_review">
        <Header />
        <ReviewForm />
      </div>
    );
  };

export default WriteReview;
