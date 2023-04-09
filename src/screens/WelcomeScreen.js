import React from "react";
import WelcomeScreenCSS from "../css/welcomescreen.module.css";
import { Link } from "react-router-dom";

function WelcomeScreen() {
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
            <Link className="nav-link" to={"/sign-in"}>
              Prijavi se
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>
              Registruj se
            </Link>
          </li>
        </ul>
      </nav>

      <div className={WelcomeScreenCSS.container}>
        <div className={WelcomeScreenCSS.header}>
          <h1 className="welcomeMessage">
            Dobrodošli na stranicu MyTaskBuddy!
          </h1>
        </div>
        <div className={WelcomeScreenCSS.content}>
          <p className={WelcomeScreenCSS.description}>
            MyTaskBuddy vam olakšava planiranje i organiziranje zadataka za
            svoju djecu i praćenje njihovog napretka. Uz prilagođene opcije,
            možete stvoriti bolji život za svoju djecu i pomoći im da ostvare
            svoj puni potencijal.
          </p>
          <Link className="nav-link" to={"/sign-in"}>
            <button className={WelcomeScreenCSS.ctaButton}>Započnite</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default WelcomeScreen;
