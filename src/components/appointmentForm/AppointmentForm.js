import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label for="contact">Contact:</label>
      <input
        id="contact"
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      ></input>
      <label for="date">Date:</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
      ></input>
      <label for="time">Time:</label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <ContactPicker contacts={contacts} />
      <input type="submit" value="Submit" />
    </form>
  );
};
