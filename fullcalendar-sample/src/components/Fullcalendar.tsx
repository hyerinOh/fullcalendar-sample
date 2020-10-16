import React, { useState } from 'react';
import Fullcalendar, {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Sidebar from './Sidebar';
import './Fullcalendar.scss';

function FullcalendarComponent() {
  const [weekendVisible, setWeekendVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  return (
    <div className="fullcalendar-wrapper">
      <Sidebar
        weekendVisible={weekendVisible}
        setWeekendVisible={setWeekendVisible}
        currentEvents={currentEvents}
      />
      <div className="fullcalendar-wrapper__component">
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendVisible}
          // initialEvents={}
          // select={}
          // eventContent={}
          // eventClick={}
          // eventsSet={}
        />
      </div>
    </div>
  );
}

export default FullcalendarComponent;
