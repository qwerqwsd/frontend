"use client";
import React, { useState, useEffect } from "react";

export default function ReservationPage() {
  const [date, setDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [location, setLocation] = useState("");
  const [reservedTimes, setReservedTimes] = useState([]);

  useEffect(() => {
    // 기본 시간 슬롯 생성
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    setTimeSlots(slots);
  }, []);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);

    if (selectedDate) {
      fetch(`http://localhost:5000/availability?date=${selectedDate}`)
        .then((response) => response.json())
        .then((data) => {
          setReservedTimes(data.reserved_times || []);
        })
        .catch((error) => console.error("Error fetching availability:", error));
    }
  };

  const handleReserve = () => {
    if (!date || !selectedTime || !location) {
      alert("Please select date, time, and location.");
      return;
    }

    const accessToken = localStorage.getItem("access_token");

    fetch("http://localhost:5000/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        date: date,
        time: selectedTime,
        location: location,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Reservation failed");
        }
        return response.json();
      })
      .then((data) => {
        alert("Reservation successful!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Reservation failed. Please try again.");
      });
  };

  return (
    <div className="container">
      <h1>Reservation</h1>
      <div className="form-group">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Select Time:</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="">-- Select Time --</option>
          {timeSlots.map((slot) => (
            <option
              key={slot}
              value={slot}
              disabled={reservedTimes.includes(slot)}
            >
              {slot}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="location">Select Location:</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        >
          <option value="">-- Select Location --</option>
          <option value="Location1">Location1</option>
          <option value="Location2">Location2</option>
          <option value="Location3">Location3</option>
        </select>
      </div>
      <button onClick={handleReserve}>Reserve</button>
    </div>
  );
}
