import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import HomePage from "./screens/HomePage";
import "./index.css";
import MyProfile from "./screens/MyProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/my-profil" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
