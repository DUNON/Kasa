import {useState,useEffect} from "react";
import axios from "axios"
import banner from "../../assets/img/banner.png";
import Slide from "../../components/Slide/Slide";
import "./Home.css";


export default function Home() {
const [data, setData] = useState([])


useEffect(() => {
    axios.get("/logements.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
}, []);

console.log(data);
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
        {data.map((logement,index) => (
            <div
            key={index}
            // className={slideAnim.index === index +1 ? "item active-anim" : "item" } >
            className = "item">
            <Slide pictures = {logement.pictures}/>
            <h3>{logement.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
