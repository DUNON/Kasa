import React from "react";
import "../Card/Card.css"

export default function Card({cover,title}) {
  return (
    <>
      <img className="location_img" src={cover} alt="location" />
      <h2 className="location_title" >{title}</h2>
    </>
  );
}
