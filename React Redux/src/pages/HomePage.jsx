import React from "react";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Counter from "../components/Counter";

function HomePage() {
  return (
    <div>
      <Profile />
      <Login />
      <Counter />
    </div>
  );
}

export default HomePage;
