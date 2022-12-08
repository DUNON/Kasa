import { useParams } from "react-router-dom";
import "./Logement.css";
import Slide from "../../components/Slide/Slide";
import useApi from "../../components/useApi/useApi";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";

export default function Logement() {
  const { logementId } = useParams();
  const { isloading, data } = useApi("/logements.json");

  const getLogementId = (data, logementId) => {
    for (let logement of data) {
      if (logement.id === logementId) {
        return logement;
      }
    }
  };
  const appart = getLogementId(data, logementId);

  return (
    <>
      <main className="logement_container">
        {isloading === true ? (
          <p>en cours de chargement</p>
        ) : (
          <section>
            <Slide pictures={appart.pictures} />

            <div className="logement">
              <div className="logement_header">
                <h2 className="logement_header_title" key={"title" + appart.id}>
                  {appart.title}
                </h2>
                <div
                  className="logement_header_city"
                  key={"logement" + appart.id}
                >
                  {appart.location}
                </div>
                <ul className="logement_header_tags">
                  {appart.tags.map((tag) => (
                    <li className="logement_header_tags_tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="logement_host">
                <div id="host" className="logement_host_info">
                  <div className="host_name">{appart.host.name}</div>
                  <img
                    className="host_picture"
                    src={appart.host.picture}
                    alt=""
                  />
                </div>
                <div className="host_rating">
                  <Rating rating={appart.rating} />
                </div>
              </div>
            </div>

            <div className="logement_info">
              <div className="collapse_container">
                <Collapse title="Description" content={appart.description} />
              </div>
              <div className="collapse_container">
                <Collapse
                  title="Equipement"
                  content={
                    <ul>
                      {appart.equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                      ))}
                    </ul>
                  }
                />
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer/>
    </>
  );
}
