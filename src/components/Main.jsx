// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Filters from './Filters';
import Event from './Event';
import './Event.css';
import EventDetails from './EventDetails';

function Main() {
  const [filters, setFilters] = useState({
    date: null,
    college: null,
    committee: null,
  });

  // Event data
  const events = [
    {
      title: 'Code-Quest',
      location: 'SFIT',
      committee: 'Committee A',
      college: 'College A',
      date: 'Today',
      price: '₹ 0',
      image: '/events1.jpg',
      promoted: true,
      btn:'book',
    },
    {
      title: 'DJ Night',
      location: 'SFIT',
      committee: 'Concerts',
      college: 'College B',
      date: 'Tomorrow',
      price: '₹ 300',
      image: '/events2.jpg',
      promoted: true,
      btn:'book',
    },
    {
      title: 'Start-Up',
      location: 'SFIT',
      committee: 'Workshops',
      college: 'College C',
      date: 'This Weekend',
      price: '₹ 500',
      image: '/events3.jpg',
      btn:'book',
    },
    {
      title: 'NSS',
      location: 'SFIT',
      committee: 'Concerts',
      college: 'College C',
      date: 'This Weekend',
      price: '₹ 750',
      image: '/events4.jpg',
      btn:'book',
    },
    {
      title: 'Special Event',
      location: 'Grant Road',
      committee: 'Special Events',
      college: 'College D',
      date: '03/11/2024', // Custom date for demonstration
      price: '₹ 1200',
      image: '/events3.jpg',
      btn:'book',
      
    },
  ];

  // Filter events based on selected filters
  const filteredEvents = events.filter((event) => {
    const isDateMatch =
      !filters.date ||
      filters.date === event.date;

    const isCollegeMatch =
      !filters.college || filters.college === event.college;

    const isCommitteeMatch =
      !filters.committee || filters.committee === event.committee;

    return isDateMatch && isCollegeMatch && isCommitteeMatch;
  });

  const location = useLocation();
  const showFilters = location.pathname === "/"; // Show filters only on the main page

  return (
    <div className="app-container">
      {showFilters && (
        <div className="sidebar">
          <Filters onFilterChange={setFilters} />
        </div>
      )}
      <div className="main-content">
        <h1>Events</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="events">
                {filteredEvents.map((event, index) => (
                  <Event
                    key={index}
                    title={event.title}
                    text={event.location}
                    btntext={event.btn}
                    image={event.image}
                    index={index}
                    promoted={event.promoted}
                  />
                ))}
              </div>
            }
          />
          <Route path="/events/:eventId" element={<EventDetails events={events} />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
