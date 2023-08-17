import "../styles/style.css";
import "../styles/Banner.css";
export default function Banner({ imgBanner, textBanner1 }) {
  return (
    <div className="banner">
      <img src={imgBanner} alt={imgBanner} />
      <p>{textBanner1}</p>
    </div>
  );
}
