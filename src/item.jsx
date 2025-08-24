import { useContext } from "react";
import { TestContex } from "./testContex";

const Item = (props) => {
  const contex = useContext(TestContex);
  return (
    <div className="time_item" style={{ color: contex }}>
      {props.children}
    </div>
  );
};
export default Item;
