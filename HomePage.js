import React from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>BlueCarbon Dashboard</h1>
        {user && <h3>Welcome, {user.name} 👋</h3>}
      </div>
      <p className="mt-3">This is your home page after login...</p>
    </div>
  );
}

export default HomePage;