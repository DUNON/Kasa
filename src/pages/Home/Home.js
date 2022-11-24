import React from "react";
import banner from "../../assets/img/banner.png";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <img
          className="banner_img"
          src={banner}
          alt="Chez vous, partout et ailleurs"
        />
      </div>
      <div className="galerie">
        <div className="item">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="galerie"
          ></img>
          <h3>Titre de la location</h3>
        </div>
        <div className="item">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
            alt="galerie"
          ></img>
        </div>
        <div className="item">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="galerie"
          ></img>
        </div>
        <div className="item">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="galerie"
          ></img>
        </div>
        <div className="item">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="galerie"
          ></img>
        </div>
        <div className="item">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt="galerie"
          ></img>
        </div>
      </div>
    </>
  );
}
