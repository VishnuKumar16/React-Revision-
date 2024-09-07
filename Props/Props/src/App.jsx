import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  let foodItems = ["Milk", "Vegitable", "Apple", "Daal", "Chapati"];
 // let foodItems = [];
  // if (foodItems.length === 0){
  //   return<h3>I'm Still Hungry.</h3>

 

   return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMsg items = {foodItems}></ErrorMsg>
      <FoodItems items ={foodItems}></FoodItems>
      
    </>
  );
}

export default App;
