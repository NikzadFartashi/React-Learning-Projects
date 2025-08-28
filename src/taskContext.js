import { createContext } from "react";
import { taskItems } from "./taskItems";

export const taskContext = createContext({
  taskItems: [],
  setTaskItems: () => {},
});
