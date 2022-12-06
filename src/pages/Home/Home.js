import { Link } from "react-router-dom";
import banner from "../../assets/img/banner.png";
import Card from "../../components/Card/Card";
import useApi from "../../components/useApi/useApi";
import "./Home.css";
import Footer from '../../components/Footer/Footer';

export default function Home() {
  const { data } = useApi("/logements.json");

  return (
    <>
      <div className="home_container">
       
          <img
            className="banner_img"
            src={banner}
            alt="Chez vous, partout et ailleurs"
          />
          <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
       
      </div>
      <div className="galerie">
        {data.map((logement, index) => (
          <Link className="location_link" to={`/logement/${logement.id}`}>
            {/* <Slide pictures={logement.pictures} />
              <h3>{logement.title}</h3> */}
            <Card cover={logement.cover} title={logement.title} />
          </Link>
        ))}
      </div>
      <Footer/>
    </>
  );
}
