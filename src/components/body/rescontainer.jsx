import ResCard from "./resCard";
import { resDetails } from "../../utils/constants";
const ResContainer = () =>{
    return(
      <div className="res_container" >
        {
          resDetails.map((card,index)=>{
            return(
              <ResCard key={index} resname={card.name} resImg={card.img} rating={card.rating}/>
            )
          })
        }
      </div>
    )
  }
  export default ResContainer;