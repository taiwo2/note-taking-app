import { configureStore } from "@reduxjs/toolkit";
import {  createStore } from "redux";
import noteReducer from "./redux/noteReducer";

export const store = createStore(noteReducer);

