import "../style/style.css"
import '../style/Carrousel.css'
import { useState } from "react"


export default function Carrousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () =>{
        const nextImage = (currentIndex + 1) % images.length;
        setCurrentIndex(nextImage)
    }
    const prevImage = () =>{
        const prevImage = (currentIndex  - 1 + images.length) % images.length;
        setCurrentIndex(prevImage)
    }
    return(
        <div className="container-carrousel">
            <span onClick={prevImage} className="itemCarrouselLeft"><i className="fa-solid fa-chevron-left"></i></span>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="imgCarrousel"/>
            <span onClick={nextImage} className="itemCarrouselRight"><i className="fa-solid fa-chevron-right"></i></span>
        </div>
    )
}