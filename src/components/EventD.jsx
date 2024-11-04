import React from 'react';
import './EventD.css'; // Import the CSS file (assuming you named it EventD.css)

function EventD() {
  const event = {
    title: "DJ night ",
    date: "November 10, 2024",
      
      where: {
        address: "1213 Broadway Avenue",
        city: "Brooklyn, NY 11221",
      },
      // Replace with actual details
    
  };

  return (
    <div className="event-container"> {/* Added a container class */}
      <div className="background-section">
        <div className="overlay">
          <h1>Join Us for {event.title}</h1>
          <br />
          <p>on {event.date}</p>
        </div>
      </div>

      <hr />

      <center>
        <p><i>Please confirm your ticket by</i></p>
        <p>{event.date}</p>
        <button  class="button">Book Here!</button>
      </center>

      <hr/>

      <div className="event-info"> {/* Added a class for styling */}
        <div className="event-info-section">
          <div className="section-header">WHAT:</div>
          <div className="section-content">{event.title}</div>
        </div>
        <div className="event-info-section">
          <div className="section-header">WHERE:</div>
          <div className="section-content">
            {event.where.address}<br />
            {event.where.city}
          </div>
        </div>
        <div className="event-info-section">
          <div className="section-header">WHEN:</div>
          <div className="section-content">{event.date}</div>
        </div>
      </div>

      <hr />
      <div className="invitation">
      <h1 className="invitation-header">Get Ready for a Festive Evening!</h1>
      <p className="invitation-text">We're so excited to invite you to this Event. It will be a great Event at the  {event.where.address} at {event.where.city}.<br/>So please plan your day accordingly.</p>   
      <p className="invitation-text"> Our Host will lead us through the event with announcements.Bring your enthusiasm and your best energy for an incredible time!</p>   

    </div>
    <hr/>
    <div className='Rec'>
        <h1 className="Rec-attire">Recommended Attire ! </h1>
        <br/>
        <p className='Rec-text' >We're recommending semi-formal attire.</p>
    </div>
   
    </div>
  );
}

export default EventD;