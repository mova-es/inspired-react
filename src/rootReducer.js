import {combineReducers} from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice.js"
import colorReducer from "./features/colorSlice.js";
import goodsReducer from "./features/goodsSlice.js"

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer
})