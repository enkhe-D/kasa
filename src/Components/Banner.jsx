import "../styles/style.css";
export default function Banner({ imgBanner, textBanner }) {
  return (
    <div className="banner">
      <img src={imgBanner} alt={imgBanner} />
      <p>{textBanner}</p>
    </div>
  );
}
