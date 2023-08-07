import { useState } from "react";
import "../styles/style.css";
import "../styles/Carrousel.css";

export default function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    const nextImage = (currentIndex + 1) % images.length;
    setCurrentIndex(nextImage);
  };
  const prevImage = () => {
    const prevImage = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevImage);
  };

  const showArrows = images.length > 1;

  return (
    <div className="carrousel">
      {showArrows && (
        <div className="arrows">
          <span onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      )}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <p>{`${currentIndex + 1} / ${images.length}`}</p>
    </div>
  );
}
