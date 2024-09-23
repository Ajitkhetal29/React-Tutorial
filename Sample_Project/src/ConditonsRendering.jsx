import FoodItems from "../src/components/FoodItems"
import ErrorMessage from "../src/components/ErrorMessage"

function ConditonsRendering() {
let foodItems = ["Dal", "Milk", "Dahi", "Fruits", "Salad"];
//   let foodItems = [];


  return (
    <>
      <h1>Food Menue</h1>
      <hr />
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>

    </>
  );
}

export default ConditonsRendering;
