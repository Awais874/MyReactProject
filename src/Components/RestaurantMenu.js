import React from 'react'
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constant';
import { useParams } from 'react-router-dom';

const RestaurantMenu =() => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

// const {resID}= useParams();
const resID = useParams();



  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API+resID.resiD);
        console.log("MENU_API+resID",MENU_API+resID.resiD);
        const json = await data.json();
       
       
        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.48490&lng=39.19200&restaurantId=498382&catalog_qa=undefined&submitAction=ENTER
        if 
        
        (json?.data?.cards) {

            const restaurantsObject = json;
            console.log("bigObject",restaurantsObject);
          const allrestaurants = json.data.cards.map(card => card?.card?.card);
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

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log("Restaurant menu object", resInfo);
  const { name, cuisines, costForTwoMessage  } = resInfo[2]?.info || {};


  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines?.join(', ')}</h3>
      <h2>{costForTwoMessage}</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;










// let allrestaurants = [];
// try {
// const RestaurantMenu = () => {

//     const [resInfo, setResInfo] = useState(null);

// useEffect(()  => {

// fetchMenu();

// },[] );

// const fetchMenu = async() => {

// const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=80426&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

// const json = await data.json();
// // console.log("here is it",json.data);
// setResInfo(json);




// console.log("complete",json);



// if (json?.data?.cards && json?.data?.cards?.length > 0) {
//     // Loop through each card
//     for (let i = 0; i < json.data.cards.length; i++) {
//       // Assuming each card has a structure similar to json.data.cards[i].card.card.info
//       let all;
//       // Push cardInfo to CardsFile array
//       if (json.data.cards[i].card.card?.info?.id) {
//         // console.log(json.data.cards[i].card.card.info);
//         all = json.data.cards[i].card.card;
//         allrestaurants.push(all);
//       }

//       //   if (ListOfRestaurants==0){
//       //     return <shimmer/>;

//       // console.log(allrestaurant);
//       setResInfo(allrestaurants);
//       console.log("here is it",resInfo);
//       const {name, cuisines, costForTwoMessage } = resInfo?.data?.cards[8]?.card?.card?.info
//     }
//   }
// }
// }
// }
//   catch (e) {
//     console.log(e.message);
//   }

 




// const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info
//   return 
//     (resInfo === null)  ? <Shimmer/> : (
//     <div className='menu'>
//        <h1> {name}</h1>
//        <h3>{cuisines}</h3>
//        <h2>{costForTwoMessage}</h2>
//         <ul>

// <li>Biryani</li>
// <li>Burger</li>
// <li>Diet Coke</li>


//         </ul>
        
//         </div>
//   );


// export default RestaurantMenu;


// **************************************************************



