import ItemList from "./ItemList";
import { useState } from "react";

// const handleBuyButtonClicked = (event) => {
//   console.log(event);
//   console.log(`${props.fooditem} :you have to pay for that bastered.`);
// };

const Fooditem = ({ items }) => {
  let [activeItems, SetActiveItem] = useState([]); // useState to color the purchased or buy item

  let onBuyButton = (item, event) => {
    // check if button buy click if yes the item will change color to blue
    let newItems = [...activeItems, item];
    SetActiveItem(newItems);
  };
  return (
    <ul className="list-group">
      {/* dynamically Store data in list  */}
      {items.map((item) => (
        <ItemList
          key={item}
          fooditem={item}
          bought={activeItems.includes(item)} // if item is selected
          //  handleBuyButton={() => console.log(`${item} Bought`)} // passing function via children
          handleBuyButton={(event) => onBuyButton(item, event)} // used dynamic event function
        ></ItemList>
      ))}
    </ul>
  );
};

export default Fooditem;
