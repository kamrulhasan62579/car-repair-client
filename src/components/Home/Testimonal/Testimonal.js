import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import TestimonalContent from "../TestimonalContent/TestimonalContent";

const Testimonal = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://desolate-dusk-36034.herokuapp.com/getReview")
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);
  return (
    <div style={{ padding: "0px 50px" }}>
      <h2 className="text-center">What's Our Client Say</h2>
      {review.length === 0 ? (
        <Loading />
      ) : (
        <TestimonalContent review={review} />
      )}
    </div>
  );
};

export default Testimonal;
