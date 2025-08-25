import { useContext } from "react";
import { TestContex } from "./testContex";

const Item = (props) => {
  const context = useContext(TestContex);

  const handleDeleteItem = () => {
    context.setTimeArr(context.timeArr.filter((t) => t !== props.children));
  };

  return (
    <div className="time_item" onClick={handleDeleteItem}>
      {props.children}
    </div>
  );
};

export default Item;
