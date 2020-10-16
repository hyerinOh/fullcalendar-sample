import React, { useState } from 'react';
import { EventApi, formatDate } from '@fullcalendar/react';
import './Sidebar.scss';

type Props = {
  weekendVisible: boolean;
  setWeekendVisible: any;
  currentEvents: EventApi[];
};
function Sidebar({ weekendVisible, setWeekendVisible, currentEvents }: Props) {
  const handleWeekendsToggle = () => {
    setWeekendVisible(!weekendVisible);
  };

  const renderSidebarEvent = (event: EventApi) => {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start!, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar__section">
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div className="sidebar__section">
        <label>
          <input
            type="checkbox"
            checked={weekendVisible}
            onChange={handleWeekendsToggle}
          ></input>
          toggle weekends
        </label>
      </div>
      <div className="sidebar__section">
        <h2>{`All Events ${currentEvents.length}`}</h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </div>
    </div>
  );
}

export default Sidebar;
