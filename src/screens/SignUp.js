import React, { Component } from "react";
import { Link } from "react-router-dom";
import RegistrationCSS from "../css/registration.module.css";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <div className={RegistrationCSS.wrapper}>
          <div className={RegistrationCSS.inner}>
            <div className="headline">
              <h3>Registracija</h3>
            </div>
            <div className="mb-3">
              <label>IME</label>
              <input
                type="text"
                className="form-control"
                placeholder="Unesite ime"
              />
            </div>

            <div className="mb-3">
              <label>PREZIME</label>
              <input
                type="text"
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
                type="password"
                className="form-control"
                placeholder="Unesite lozinku"
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Zapamti me kao nastavnika
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                <Link className="nav-link" to={"/home-page"}>
                  Registruj se
                </Link>
              </button>
            </div>
            <p className="forgot-password text-right">
              Već imate račun, <a href="/sign-in">prijavite se?</a>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
