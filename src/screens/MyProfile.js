import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyProfileCSS from "../css/myprofile.module.css";

const MyProfile = () => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <Link className="navbar-brand" to={"/sign-in"}>
          <img
            src="/assets/images/logo.png"
            alt="MyTaskBuddy Logo"
            width="30"
            height="30"
          />
          MyTaskBuddy
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/home-page"}>
              Početna
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/my-profil"}>
              Profil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/statistics"}>
              Statistika
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-in"}>
              ODJAVA
            </Link>
          </li>
        </ul>
      </nav>
      <div className={MyProfileCSS.wrapper}>
        <div className={MyProfileCSS.inner}>
          <div class={MyProfileCSS.profileContainer}>
            <div class="profileInfo">
              <div>
                <img
                  src="/assets/images/user.png"
                  alt="Profile"
                  width="100"
                  height="100"
                  style={{ display: "block", margin: "0 auto 60px" }}
                />
              </div>
              <div className={MyProfileCSS.info}>
                <label style={{ marginRight: "10px", marginBottom: "10px" }}>
                  Name:
                </label>
                <span>Semina</span>
              </div>
              <div className={MyProfileCSS.info}>
                <label
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Surname:
                </label>
                <span>Muratovic</span>
              </div>
              <div className={MyProfileCSS.info}>
                <label style={{ marginRight: "10px", marginBottom: "10px" }}>
                  Email:
                </label>
                <span>semina.doe@example.com</span>
              </div>
              <div className={MyProfileCSS.info}>
                <label style={{ marginRight: "10px", marginBottom: "10px" }}>
                  Password:
                </label>
                <span>********</span>
              </div>
            </div>
            <div class={MyProfileCSS.profileEdit}>
              <div>
                <label>Change email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label>Change password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MyProfile;
