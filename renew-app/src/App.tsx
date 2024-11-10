import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import AddressFinder from "./components/AddressFinder";

function App() {
  return (
    <div className="App">
      <Map />
      <AddressFinder />
    </div>
  );
}

export default App;
