import React from "react";
//import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import Proptypes from "prop-types";
function Food({name,picture,rating}){
  ////.log(props.fav);
  console.log(name);
  return <div>
    <h2> i like {name} </h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt={name}/>
    </div>
}



const foodIlike = [
{id:1, name: "kimchi",picture :"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/220px-Various_kimchi.jpg",rating : 3},
{id:2, name: "kimchi",picture :"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/220px-Various_kimchi.jpg",rating : 2}
///{name: "samgubsal",picture:"https://newsimg.sedaily.com/2020/05/19/1Z2T8AAUQM_3.jpg"}
];

// function renderFood(dish){
//   console.log(dish);
//   return <Food key = {dish.id} name ={dish.name} picture = {dish.picture}/>
// }

Food.propTypes = {
  name : Proptypes.string.isRequired,
  picture : Proptypes.string.isRequired,
  rating : Proptypes.number.isRequired
};

function App() {
  return (
  <div >
    {foodIlike.map(dish => (<Food key = {dish.id} name = {dish.name} picture = {dish.picture} rating = {dish.rating}/> ))} 
    {/*foodIlike.map(renderFood)*/}
  </div>
  );
}

export default App;
