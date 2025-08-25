import { useContext } from "react";
import Item from "./item";
import { TestContex } from "./testContex";

const TimeList = (props) => {
  const contex = useContext(TestContex);
  return (
    <div className="main_time_list">
      {contex.timeArr.map((c) => (
        <Item key={Math.random()}>{c}</Item>
      ))}
    </div>
  );
};
export default TimeList;
