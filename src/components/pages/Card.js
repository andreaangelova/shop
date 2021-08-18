import { useSelector } from "react-redux";
import CardItems from "../shared/CardItems";
import shoppingItems from "../shared/shoppingItems";

const Card = () => {
  const selectedItems = useSelector((store) => store.selectedItems);
  const getItemsByAllItems = () => {
    let selected = shoppingItems.filter((item) =>
      selectedItems.some((x) => x.id === item.id)
    );
    selected = selected.map((item) => {
      item.quantity = selectedItems.find((x) => x.id === item.id).quantity;
      return item;
    });
    console.log(selected);
    return selected;
  };

  const getItemsBySelectedItems = () => {
    const selected = selectedItems.map((item) => {
      const selectedItem = shoppingItems.find((x) => x.id === item.id);
      item.title = selectedItem.title;
      item.description = selectedItem.description;
      item.gender = selectedItem.gender;
      return item;
    });
    console.log(selected);
    return selected;
  };
  return (
    <div>
      <h1>This are the items that you have chosen</h1>
      <CardItems items={getItemsByAllItems()} />
    </div>
  );
};

export default Card;
