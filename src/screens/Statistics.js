import React from "react";
import StatisticsCSS from "../css/statistics.module.css";
import { Link } from "react-router-dom";

class Statistics extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <form>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <Link className="navbar-brand" to={"/home-page"}>
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
        <div className={StatisticsCSS.wrapper}>
          <div className={StatisticsCSS.inner}>
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>
              STATISTIKA
            </h1>
            <div className={StatisticsCSS.table}>
              <table>
                <thead>
                  <tr>
                    <th>Aktivnosti</th>
                    <th>Vrijeme početka</th>
                    <th>Vrijeme završetka</th>
                    <th>Mjesto</th>
                    <th>Prosječno trajanje</th>
                    <th>Završena aktivnost</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length > 0 &&
                    data.map((activity, index) => (
                      <tr key={index}>
                        <td>{activity.col1}</td>
                        <td>{activity.col2}</td>
                        <td>{activity.col3}</td>
                        <td>{activity.col4}</td>
                        <td>{activity.col5}</td>
                        <td>{activity.col6}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Statistics;
