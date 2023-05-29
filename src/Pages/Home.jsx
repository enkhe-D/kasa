import Card from "../Components/Card";
import imageBanner from "../assets/images/img.png";
import Banner from "../Components/Banner";
import datasKasa from "../datas/datasKasa.json"
import { useParams } from "react-router-dom";
import "../style/style.css"

console.log(datasKasa[0].id);

export default function Home() {
  const {id} = useParams();

  return (
    <>
      <Banner
        textBanner="Chez vous, partout ailleurs"
        imgBanner={imageBanner}
      />
      <section className="container-card">
        {datasKasa.map((card) => 
        <Card 
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
