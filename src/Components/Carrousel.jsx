import "../styles/style.css";
import { useState } from "react";

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

  return (
    <div className="container-carrousel">
      <span onClick={prevImage} className="arrow">
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
      <div className="image-carrousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="img-carrousel"
        />
      </div>
    </div>
  );
}
