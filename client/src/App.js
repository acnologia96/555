import React from "react";
import { Routes, Route } from "react-router-dom";
import Getdata from "./component/page/Get_data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Getdata />}></Route>
      </Routes>
    </div>
  );
}

export default App;
