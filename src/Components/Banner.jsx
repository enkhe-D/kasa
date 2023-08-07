import "../styles/style.css";
import "../styles/Banner.css";
export default function Banner({ imgBanner, textBanner1, textBanner2 }) {
  return (
    <div className="banner">
      <img src={imgBanner} alt={imgBanner} />
      <p>{textBanner1}</p>
      <p>{textBanner2}</p>
    </div>
  );
}
