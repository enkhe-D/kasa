import Card from "../Components/Card";
import imageBanner from "../assets/images/img.png";
import Banner from "../Components/Banner";
import datasKasa from "../datas/datasKasa.json";
import "../styles/style.css";

export default function Home() {
  return (
    <main>
      <Banner
        textBanner="Chez vous, partout et ailleurs"
        imgBanner={imageBanner}
      />
      <section className="cards">
        {datasKasa.map((card) => (
          <Card
            key={card.id}
            cardId={card.id}
            cardTitle={card.title}
            cardCover={card.cover}
            cardCoverAlt={card.cover}
          />
        ))}
      </section>
    </main>
  );
}
