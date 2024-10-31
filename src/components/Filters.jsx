import React, { useState } from 'react';

function Filters({ onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({
    date: null,
    college: null,
    committee: null,
  });

  const [openDropdown, setOpenDropdown] = useState({
    date: false,
    college: false,
    committee: false,
  });

  const [customDate, setCustomDate] = useState('');

  // Toggle dropdown sections
  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  // Handle individual filter selection
  const handleFilterClick = (filterType, value) => {
    const updatedFilters = { ...selectedFilters, [filterType]: value };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Clear individual filter
  const handleClear = (filterType) => {
    const updatedFilters = { ...selectedFilters, [filterType]: null };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
    if (filterType === 'date') {
      setCustomDate(''); // Clear custom date if date filter is cleared
    }
  };

  // Handle custom date input
  const handleCustomDateChange = (e) => {
    const dateValue = e.target.value;
    setCustomDate(dateValue);
    const updatedFilters = { ...selectedFilters, date: dateValue };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>

      {/* Date Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleDropdown('date')}>
          <h3>Date</h3>
          <div className="header-right">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear('date');
              }}
              className="clear-button"
            >
              Clear
            </button>
            <i className={`fas fa-chevron-${openDropdown.date ? 'up' : 'down'}`} />
          </div>
        </div>
        {openDropdown.date && (
          <div className="filter-options">
            {['Today', 'Tomorrow', 'This Weekend'].map((date) => (
              <button
                key={date}
                onClick={() => handleFilterClick('date', date)}
                className={selectedFilters.date === date ? 'active' : ''}
              >
                {date}
              </button>
            ))}
            {/* Custom Date Input */}
            <input
              type="date"
              value={customDate}
              onChange={handleCustomDateChange}
              placeholder="Select a date"
            />
          </div>
        )}
      </div>

      {/* College Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleDropdown('college')}>
          <h3>Colleges</h3>
          <div className="header-right">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear('college');
              }}
              className="clear-button"
            >
              Clear
            </button>
            <i className={`fas fa-chevron-${openDropdown.college ? 'up' : 'down'}`} />
          </div>
        </div>
        {openDropdown.college && (
          <div className="filter-options">
            {['College A', 'College B', 'College C'].map((college) => (
              <button
                key={college}
                onClick={() => handleFilterClick('college', college)}
                className={selectedFilters.college === college ? 'active' : ''}
              >
                {college}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Committee Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleDropdown('committee')}>
          <h3>Committees</h3>
          <div className="header-right">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear('committee');
              }}
              className="clear-button"
            >
              Clear
            </button>
            <i className={`fas fa-chevron-${openDropdown.committee ? 'up' : 'down'}`} />
          </div>
        </div>
        {openDropdown.committee && (
          <div className="filter-options">
            {[
              'Committee A',
              'Committee B',
              'Committee C',
              'Committee D',
            ].map((committee) => (
              <button
                key={committee}
                onClick={() => handleFilterClick('committee', committee)}
                className={selectedFilters.committee === committee ? 'active' : ''}
              >
                {committee}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        className="remove-all"
        onClick={() => onFilterChange({ date: null, college: null, committee: null })}
      >
        Remove All
      </button>
    </div>
  );
}

export default Filters;
