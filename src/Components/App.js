import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu  from "./RestaurantMenu";
// import Grocery from "./Grocery";
import { lazy,Suspense } from "react";
import "../index.css"; 


const Grocery = lazy(() => import("./Grocery"));

const Applayout=() => {


    return (

<div className="app">
<Header/>
<Outlet/>



</div>

    );
};


const appRouter = createBrowserRouter([{

path: "/",

element:<Applayout/>,
children : [
  {

    path: "/",

    element: <Body/>,


  },
  {
  path: "/about",

  element:<About/>,
  

},
{
  path: "/restaurants/:resiD",

  element:<RestaurantMenu/>,
  

},
{
  path: "/contact",

  element:<Contact/>,

},

{
  path: "/Grocery",

  element:<Suspense fallback={<h1>Just a second</h1>}><Grocery/></Suspense>,

}

],
errorElement : <Error/>
}





]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);