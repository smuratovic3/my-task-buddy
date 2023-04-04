import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginCSS from "../css/login.module.css";

export default class Login extends Component {
  render() {
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
        <div className={LoginCSS.wrapper}>
          <div className={LoginCSS.inner}>
            <div className="headline">
              <h3>Prijava</h3>
            </div>

            <div className="mb-3">
              <label>IME</label>
              <input
                type="ime"
                className="form-control"
                placeholder="Unesite ime"
              />
            </div>

            <div className="mb-3">
              <label>PREZIME</label>
              <input
                type="prezime"
                className="form-control"
                placeholder="Unesite prezime"
              />
            </div>

            <div className="mb-3">
              <label>E-MAIL ADRESA</label>
              <input
                type="email"
                className="form-control"
                placeholder="Unesite email"
              />
            </div>

            <div className="mb-3">
              <label>LOZINKA</label>
              <input
                type="lozinka"
                className="form-control"
                placeholder="Unesite lozinku"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                <Link
                  className="link"
                  to={"/home-page"}
                  style={{ color: "white" }}
                >
                  Prijavi se
                </Link>
              </button>
            </div>

            <label className="custom-control-label" htmlFor="customCheck1">
              Nemate račun?
            </label>
            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                <Link
                  className="nav-link"
                  to={"/sign-up"}
                  style={{ color: "white" }}
                >
                  Registruj se
                </Link>
              </button>
            </div>
            <p className="forgot-password text-right">
              Zaboravili ste <Link to="/forgot-password">lozinku?</Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
