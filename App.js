import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import ShopNavigator from "./navigation/ShopNavigator";
import productsReducer from "./store/reducers/products";
import { AppLoading } from "expo";
import { useFonts } from 'expo-font';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);


export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
  if (!fontsLoaded) {
    return (
      <AppLoading/>
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
