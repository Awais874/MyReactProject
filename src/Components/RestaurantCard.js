import resObj from "../utils/mockData";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (Props) => {
  const id = Props.resData?.info?.id;

  // if (id) {
  //   console.log(id);
  // } else {
  //   console.error("ID not found in resData:", resData);
  // }
  console.log("Ye hai latest", Props?.resData?.info);
  const {name,cuisines,cloudinaryImageId } = Props?.resData?.info;

  return (
    <div className="m-4 p-4 w-[200px] hover:bg-gray-300 bg-gray-100">
      <img
        className="res-logo rounded-lg"
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2"> {name} </h3>
      <h4> {cuisines}</h4>
      <h4> Stars</h4>
      <h4>32 Minutes</h4>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) =>
  {
return(props) => {
return(
  <div>
<label className="bg-black m-2 p-2 text-white rounded-lg" >
  Promoted
</label>
<RestaurantCard {...props}/>
  </div>
);

};

  };



