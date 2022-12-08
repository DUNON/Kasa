import React from "react";
import "../Card/Card.css"

export default function Card({cover,title}) {
  return (
    <div className="item" >
      <img src={cover} alt="Img de la location" />
      <h2 className="title" >{title}</h2>
    </div>
  );
}
