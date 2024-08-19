import AppTitle from "./components/AppTitle";
import Fooditem from "./components/Fooditem";
import Error from "./components/Error";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //let fooditem = ["Daal", "Green Vegitable", "Roti"];
  //let fooditem = [];

  //let ErrorMessage = fooditem.length === 0 ? <h3> I am Still Hungry</h3> : null;

  //let [fooditem, setFoodItem] = useState(["Salad", "Milk", "Ghee"]);
  let [fooditem, setFoodItem] = useState([]);

  //let [TextToShow, SetTextState] = useState("Food Item Entered By User"); // Managing Satet useState Hook
  // console.log(`Current Text To Show: ${TextToShow}`); // displays the current state
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ""; // its use to come back to your previous state

      let newItem = [...fooditem, newFoodItem]; // get the previous item from array using spread operator
      setFoodItem(newItem); // passed the new item in array
      console.log("New Food Item Enterd: " + newFoodItem);
    }

    // console.log(event);
    // SetTextState(event.target.value);
  };

  return (
    /* `React.Fragment` is a feature in React that allows you to group multiple elements without adding
    extra nodes to the DOM. It is a common pattern used when you need to return multiple elements in
    a component's render method. This way, you can avoid adding unnecessary div elements to the DOM
    structure. */
    //short form of fragment
    <>
      <h1 className="text-center">Healty Food- Fragment</h1>
      <ul className="list-group">
        <li className="list-group-item">Daal </li>
        <li className="list-group-item">Green Vegitable </li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
      </ul>
      <h1 className="text-center">Healty Food- Map</h1>
      <ul className="list-group">
        {/* dynamically Store data in list  */}
        {fooditem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <h1 className="text-center">Healty Food- Ternary Condition </h1>
      {/* //  {ErrorMessage} */}
      <ul className="list-group">
        {/* dynamically Store data in list  */}
        {fooditem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      {/* Components Based Healthy Food Display  - Props */}
      <AppTitle></AppTitle>
      <Error items={fooditem}></Error>
      <Fooditem items={fooditem}></Fooditem>
      Components Based Healthy Food Display - Children Props
      <Container>
        <h1 className="text-center">Healty Food- Children Props</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <Error items={fooditem}></Error>
        {/* <p>{TextToShow}</p> */}

        <Fooditem items={fooditem}></Fooditem>
      </Container>
      {/* <Container>
        <h1 className="text-center">Healty Food- Children Props</h1>
      </Container> */}
    </>
  );
}

export default App;
