import { Link } from "react-router-dom";
import banner from "../../assets/img/banner.png";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import useApi from "../../components/useApi/useApi";
import "./Home.css";

export default function Home() {
  const { data } = useApi("/logements.json");

  return (
    <>
      <div className="home_container">
        <div className="banner">
          <img
            className="banner_img"
            src={banner}
            alt="Chez vous, partout et ailleurs"
          />
          <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
        </div>
        <div className="galerie">
          {data.map((logement, index) => (
            <Link className="item" to={`/logement/${logement.id}`} key={index}>
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
