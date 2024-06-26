import React, { useState } from "react";

function Carousel() {
  const listImg = [
    {
      id: 1,
      img: "a",
    },
    {
      id: 2,
      img: "b",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listImg.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listImg.length) % listImg.length
    );
  };

  return (
    <>
      <img src={listImg[currentIndex].img} alt={`Image ${currentIndex + 1}`} />
      <div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default Carousel;
