import React, { Component } from "react";
import ForgotPasswordCSS from "../css/forgotpassword.module.css";

export default class ForgotPassword extends Component {
  render() {
    return (
      <form>
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
