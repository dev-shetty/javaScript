import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Counter />
    </div>
  );
}

export default App;
