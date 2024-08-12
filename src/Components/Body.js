import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let CardsFile = [];

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  console.log("abccc", filteredRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=80426&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json();

      if (json?.data?.cards && json?.data?.cards?.length > 0) {
        // Loop through each card
        for (let i = 0; i < json.data.cards.length; i++) {
          // Assuming each card has a structure similar to json.data.cards[i].card.card.info
          let allrestaurant;
          // Push cardInfo to CardsFile array
          if (json.data.cards[i].card.card?.info?.id) {
            // console.log(json.data.cards[i].card.card.info);
            allrestaurant = json.data.cards[i].card.card;
            CardsFile.push(allrestaurant);
          }

          //   if (ListOfRestaurants==0){
          //     return <shimmer/>;

          // console.log(allrestaurant);

          setListOfRestaurant(CardsFile);
          setFilteredRestaurant(CardsFile);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(SearchText.toLowerCase());
              });
              console.log("abcd", filteredRestaurant);
              // setFilteredRestaurant(filteredRestaurant);

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = ListOfRestaurants?.filter(
              (res) => res?.info?.avgRating > 4
            );

            setFilteredRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {console.log("aaa", filteredRestaurant)}
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants.info?.id}
            to={"/restaurants/" + restaurants.info?.id}
          >
           
            <RestaurantCard key={restaurants?.info?.id} resData={restaurants} />
          
            </Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
