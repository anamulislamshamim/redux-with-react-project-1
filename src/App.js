import React, {  } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "./services/actions/counterAction";

function App() {
    const count = useSelector(state => state.count);
    console.log("count: ", count);
    const dispatch = useDispatch();
    const incrementHandeler = () => {
      dispatch(incrementCounter());
    };
    const decrementHandeler = () => {
      dispatch(decrementCounter());
    };
    const resetHandeler = () => {
      dispatch(resetCounter());
    };
    return (
    <div className="App">
      <h1>{  count } </h1>
      <button onClick={ decrementHandeler }>Decrement --</button>
      <button onClick={ resetHandeler }>Reset 0</button>
      <button onClick={ incrementHandeler }>Increment ++</button>
    </div>
  );
}

export default App;
// 1. state - count: 0;
// 2. actions - increment, decrement, reset
// 3. reducer
// 4. store
// 5. provide the store
// 6. use the store and manage the store.
