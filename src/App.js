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
import Statistics from "./screens/Statistics";
import WelcomeScreen from "./screens/WelcomeScreen";

function App() {
  const data = [
    {
      col1: "Uraditi zadaću",
      col2: "12:00 PM",
      col3: "16:00 PM",
      col4: "Kuća",
      col5: "3 sata",
      col6: "DA",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomeScreen />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/my-profil" element={<MyProfile />} />
          <Route path="/statistics" element={<Statistics data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
