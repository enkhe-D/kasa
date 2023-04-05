import Card from "../Components/Card";
import imageBanner from "../assets/images/img.png";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <>
      <Banner
        textBanner="Chez vous, partout ailleurs"
        imgBanner={imageBanner}
      />
      <Card />
    </>
  );
}
