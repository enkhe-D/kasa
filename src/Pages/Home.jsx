import Card from "../Components/Card";
import imageBanner from "../assets/images/img.png";
import Banner from "../Components/Banner";
import datasKasa from "../datas/datasKasa.json"
import "../style/style.css"

export default function Home() {
  return (
    <>
      <Banner
        textBanner="Chez vous, partout ailleurs"
        imgBanner={imageBanner}
      />
      <section className="container-card">
        {datasKasa.map((card) => 
        <Card 
        key={card.id}
        cardId={card.id}
        cardTitle = {card.title}
        cardCover = {card.cover}
        cardCoverAlt = {card.cover}
        />
        )}
      </section>
    </>
  );
}
