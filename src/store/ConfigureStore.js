import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "../middleware/Logger";
import Reducer from "./Reducers";
import toast from "../middleware/Logger";

export default function ConfigStore() {
  return configureStore({
    reducer: Reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toast,
    ],
  });
}
