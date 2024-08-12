import resObj from "../utils/mockData";
import { CDN_URL } from "../utils/constant";
const styleCard = {

  backgroundColor: "#F0F0F0" ,
  
  
  };
  


const RestaurantCard = (Props) => {
    
    const id = Props.resData?.info?.id;
            

  // if (id) {
  //   console.log(id);
  // } else {
  //   console.error("ID not found in resData:", resData);
  // }
console.log("Ye hai latest",Props);
const {name,cuisines,cloudinaryImageId} = Props?.resData?.info;

return(
 
 <div className="res-card" style={styleCard}>
   
<img className="res-logo" alt="food-logo" src={CDN_URL+cloudinaryImageId}/> 
<h3> {name} </h3>
<h4> {cuisines}</h4>
<h4> Stars</h4>
<h4>32 Minutes</h4>

</div>


    )
};

export default RestaurantCard;



