import "../style/Banner.css"
import "../style/style.css"
export default function Banner({ imgBanner, textBanner }) {
  return (
    <div className="image-container">
        <img src={imgBanner} alt="site kasa" className="image"/>
        <div className="text-overlay">
          <p>{textBanner}</p>
        </div>
    </div>
  );
}
