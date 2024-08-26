import { useEffect,useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resID) => {

const [resInfo, setResInfo] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API + resID.resiD);
        
        const json = await data.json();

        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.48490&lng=39.19200&restaurantId=498382&catalog_qa=undefined&submitAction=ENTER
        if (json?.data?.cards) {
          const restaurantsObject = json;
       
          const allrestaurants = json.data.cards.map(
            (card) => card?.card?.card
          );
          console.log("allrestaurants menu object", allrestaurants);
          setResInfo(allrestaurants);
        }
      } catch (e) {
        setError(e.message);
      }
    };

    fetchMenu();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }


const fetchData = async() => {

    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json);


};

return resInfo;

}

export default useRestaurantMenu;