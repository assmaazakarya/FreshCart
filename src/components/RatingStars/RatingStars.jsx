import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke, faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { countDown } from "../../utlis/countDown";

export default function RatingStars({ratingsAverage}) {
 
function addIcon(element){
  
  if(element <= Math.trunc(ratingsAverage)) return faStar
  else if(element === (Math.trunc(ratingsAverage) + 1) && (ratingsAverage % 1).toFixed(1) >= 0.5) return faStarHalfStroke
  else return faStarReg
}



 return <>
      <div className="stars text-yellow-400">
              {
              [1,2,3,4,5].map((element)=> <FontAwesomeIcon key={element} icon={addIcon(element)}/> )
              }
              </div>
    </>
}
