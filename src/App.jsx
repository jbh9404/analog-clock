import React from "react";
import "./App.css";
import Clock from "./components/Clock/index";
import ColorCtrl from "./components/ColorCtrl";

function App() {
  return (
    <div>
      <Clock />
      <ColorCtrl />
    </div>
  );
}

export default App;
