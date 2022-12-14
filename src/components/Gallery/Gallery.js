import {useState,useEffect} from "react";
import "./Gallery.css";
import chevronDroit from "../../assets/img/chevron_droit.png"
import chevronGauche from "../../assets/img/chevron_gauche.png"

export default function Slide({pictures}) {
    const [index, setIndex] = useState(0)
    const length = pictures.length;
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
     <img className="mainImg" src={pictures[index]} alt="gallery"></img>
     <div className="actions">
        <button onClick={prev}><img src={chevronGauche} className='chevronLeft' alt="previous"></img></button>
        <button onClick={next}><img src={chevronDroit} className='chevronRight' alt="next"></img></button>   
     </div>
     <div className='carousel_Index'>{index +1} / {length}</div>
    </div>
  );
}
