import {useState,useEffect} from "react";
import "./Slide.css";

export default function Slide({pictures}) {
    console.log(pictures);
    const [index, setIndex] = useState(0)
    useEffect(() => {
     setIndex(0)
    }, [])

    const next = () => {
        if (index === pictures.length - 1) {
            setIndex(0)
          } else {
            setIndex(index +1)
          }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(pictures.length -1)
          } else {
            setIndex(index - 1)
          }
    }
    
  return (
    <div className="slide">
     <img className="mainImg" src={pictures[index]}></img>
     <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
     </div>
    </div>
  );
}
