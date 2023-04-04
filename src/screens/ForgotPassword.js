import React, { Component } from "react";
import ForgotPasswordCSS from "../css/forgotpassword.module.css";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
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
        <div className={ForgotPasswordCSS.wrapper}>
          <div className={ForgotPasswordCSS.inner}>
            <h3>Zaboravili ste lozinku</h3>

            <div className="mb-3">
              <label>E-MAIL ADRESA</label>
              <input
                type="email"
                className="form-control"
                placeholder="Unesite email"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Pošalji
              </button>
            </div>

            <p className="forgot-password text-right">
              Na E-mailu ćete dobiti novu lozinku!
            </p>
          </div>
        </div>
      </form>
    );
  }
}
