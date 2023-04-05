export default function Banner({ imgBanner, textBanner }) {
  return (
    <div className="container-banner">
      <p className="banner-img">
        <img src={imgBanner} alt="img banner" className="img-banner" />
      </p>
      <p className="bg-dark-banner"></p>
      <p className="text-banner">{textBanner}</p>
    </div>
  );
}
