import React from "react";
import bannerAbout from "../../assets/img/bannerAbout.png";
import "./About.css";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      <div className="about_container">
        <div className="banner">
          <img
            className="banner_img"
            src={bannerAbout}
            alt="paysage montagne"
          />
        </div>

        <section className="section_about">
          <div className="collapse_about_container">
            <Collapse
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
          </div>
          <div className="collapse_about_container">
            <Collapse
              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
          </div>
          <div className="collapse_about_container">
            <Collapse
              title="Service"
              content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
          </div>
          <div className="collapse_about_container">
            <Collapse
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
