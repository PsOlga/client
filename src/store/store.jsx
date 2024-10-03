import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "./categoriesSlice";
import { combineReducers } from 'redux';
import productsRducer from './productsSlice';

const mainReducer = combineReducers ({
  categories: categoriesReducer,
  products: productsRducer,
})

const store = configureStore({
  reducer: mainReducer,
});

export default store;