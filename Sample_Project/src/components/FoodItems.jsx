import Items from "./Items";

const FoodItems = ({items}) => {
  return (
    <>
      <ul class="list-group">
        {items.map((item) => (

            <Items key={item} foodItem={item}></Items>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;