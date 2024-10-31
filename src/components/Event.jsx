import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

function Event({ title, text, btntext, image, index, promoted }) { // Add `promoted` here
  return (
    <div className="event-card">
      {promoted && <span className="promoted">PROMOTED</span>}
      <div className="event-card__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="event-card__content">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__text">{text}</p>
        <Link to={`/events/${index}`} className="event-link">
          <button className="event-card__button">{btntext}</button>
        </Link>
      </div>
    </div>
  );
}

export default Event;
