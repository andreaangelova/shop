import { useDispatch, useSelector } from "react-redux";
import CardItems from "../shared/CardItems";
import shoppingItems from "../shared/shoppingItems";

const Card = () => {
  const selectedItems = useSelector((store) => store.selectedItems);
  const dispatch = useDispatch();
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
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const addMore = (id) => {
    dispatch({ type: "ADD_MORE_ITEMS", payload: id });
  };
  const addLess = (id) => {
    dispatch({ type: "ADD_LESS_ITEMS", payload: id });
  };
  return (
    <div>
      <h1>This are the items that you have chosen</h1>
      <CardItems
        items={getItemsByAllItems()}
        removeItem={removeItem}
        addMore={addMore}
        addLess={addLess}
      />
    </div>
  );
};

export default Card;
