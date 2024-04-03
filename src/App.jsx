import React from "react";
import simeonStyle from "./simeon.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  let myAge = 100;
  let myStyle = { color: "", backgroundColor: "grey" };
  return (
    <>
      <h2 className={simeonStyle.myHeader}>Jesus my Lover</h2>
      <h3 style={myStyle}>{myAge}</h3>
      <h2 style={{ color: "", backgroundColor: "blue" }}>I love Jesus</h2>
    </>
  );
};
export default App;
