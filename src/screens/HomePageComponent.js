import React, { Component } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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

  handleAddEvent() {
    const { newEvent, allEvents } = this.state;

    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }

    this.setState({
      allEvents: [...allEvents, newEvent],
      newEvent: { title: "", start: "", end: "", username: "" },
    });
  }

  render() {
    const { newEvent, allEvents } = this.state;

    return (
      <div className="HomePage">
        <div className={HomePageCSS.wrapper}>
          <div className={HomePageCSS.inner}>
            <h1>Kalendar</h1>
            <h2>Dodaj aktivnost</h2>
            <div>
              <input
                type="text"
                placeholder="Naslov"
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.title}
                onChange={(e) =>
                  this.setState({
                    newEvent: { ...newEvent, title: e.target.value },
                  })
                }
              />
              <DatePicker
                placeholderText="Datum početka "
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) =>
                  this.setState({ newEvent: { ...newEvent, start } })
                }
              />
              <DatePicker
                placeholderText="Datum završetka "
                selected={newEvent.end}
                onChange={(end) =>
                  this.setState({ newEvent: { ...newEvent, end } })
                }
              />
              <input
                type="text"
                placeholder="Unesite ime korisnika"
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.username}
                onChange={(e) =>
                  this.setState({
                    newEvent: { ...newEvent, username: e.target.value },
                  })
                }
              />

              <button
                style={{ marginTop: "10px" }}
                onClick={this.handleAddEvent}
              >
                Dodaj aktivnost
              </button>
            </div>
            <Calendar
              localizer={localizer}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600, margin: "10px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
