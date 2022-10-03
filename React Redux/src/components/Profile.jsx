import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile</h1>
      <li>Name: {user.name}</li>
      <li>Age: {user.age}</li>
      <li>Email: {user.email}</li>
    </div>
  );
}

export default Profile;
