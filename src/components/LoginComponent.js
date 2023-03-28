import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Prijava</h3>

        <div className="mb-3">
          <label>IME</label>
          <input type="ime" className="form-control" placeholder="Enter name" />
        </div>

        <div className="mb-3">
          <label>PREZIME</label>
          <input
            type="prezime"
            className="form-control"
            placeholder="Enter surname"
          />
        </div>

        <div className="mb-3">
          <label>E-MAIL ADRESA</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>LOZINKA</label>
          <input
            type="lozinka"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Prijavi se
          </button>
        </div>
        <label className="custom-control-label" htmlFor="customCheck1">
          Nemate račun?
        </label>
        <div className="d-grid">
          <button type="submit" className="btn btn-danger">
            Registruj se
          </button>
        </div>
        <p className="forgot-password text-right">
          Zaboravili ste <a href="#">lozinku?</a>
        </p>
      </form>
    );
  }
}
