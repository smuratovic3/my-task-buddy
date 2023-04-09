import React, { Component } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import HomePageCSS from "../css/homepage.module.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default class HomePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEvent: { title: "", start: "", end: "", username: "" },
      allEvents: [
        {
          title: "Uraditi zadaću",
          allDay: true,
          start: new Date(2023, 4, 1),
          end: new Date(2023, 4, 4),
        },
      ],
    };
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleAddNewEvent = () => {
    this.setState({
      newEvent: { title: "", start: new Date(), end: new Date(), username: "" },
      isEditingEvent: true,
    });
  };

  handleAddEvent = (e) => {
    e.preventDefault();
    const { allEvents, newEvent } = this.state;
    this.setState(
      {
        allEvents: [...allEvents, newEvent],
        isEditingEvent: false,
      },
      () => {
        // Reset newEvent with current date and time values
        this.handleAddNewEvent();
      }
    );
  };

  render() {
    const { newEvent, allEvents } = this.state;

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

        <div className={`${HomePageCSS.addEvent} my-form`}>
          <input
            type="text"
            placeholder="Naslov"
            style={{
              width: "100%",
              marginRight: "10px",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              color: "black",
              cursor: "pointer",
            }}
            value={newEvent.title}
            onChange={(e) =>
              this.setState({
                newEvent: { ...newEvent, title: e.target.value },
              })
            }
          />
          <br></br>
          <input
            type="text"
            placeholder="Unesite ime korisnika"
            style={{
              width: "100%",
              marginRight: "10px",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              color: "black",
              cursor: "pointer",
            }}
            value={newEvent.username}
            onChange={(e) =>
              this.setState({
                newEvent: { ...newEvent, username: e.target.value },
              })
            }
          />
          <br></br>
          <DatePicker
            placeholderText="Datum početka "
            selected={newEvent.start}
            onChange={(date) =>
              this.setState({
                newEvent: { ...newEvent, start: date },
              })
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <br></br>
          <DatePicker
            placeholderText="Datum završetka "
            selected={newEvent.end}
            onChange={(date) =>
              this.setState({
                newEvent: { ...newEvent, end: date },
              })
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="custom-datepicker"
          />
          <br></br>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "blue",
              width: "100%",
              marginRight: "10px",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={this.handleAddEvent}
          >
            {" "}
            Dodaj aktivnost
          </button>
        </div>

        <div className="HomePage">
          <div className={HomePageCSS.wrapper}>
            <div className={HomePageCSS.inner}>
              <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600, margin: "10px", zIndex: "1" }}
                selectable={true}
                onSelectSlot={this.handleSelect}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
