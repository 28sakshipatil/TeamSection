// EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails({ events }) {
  const { eventId } = useParams();
  const event = events[eventId];

  if (!event) return <p>Event not found</p>;

  return (
    <div>
        <center>
    <div className="event-details">
      <h2>{event.title}</h2>
      <img src={event.image} alt={event.title} className="event-details-image" />
      <p>Location: {event.location}</p>
      <p>Committee: {event.committee}</p>
      <p>Date: {event.date}</p>
      <p>Price: {event.price}</p>
      
      {/* Event registration form */}
      <form className="event-form">
        <h3>Register for this event</h3>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
    </center>
    </div>
  );
}

export default EventDetails;
