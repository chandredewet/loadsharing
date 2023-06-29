import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const testEvents = {
    start: moment("2023-06-28T07:00:00+02:00").toDate(),
    end: moment("2023-06-28T08:30:00+02:00").toDate(),
    title: "Chandre"
}

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = ({testEvents}) => (
  <div className="myCustomHeight" style={{ height: 500}}>
    <Calendar
      localizer={localizer}
      events={testEvents}
    //   startAccessor="start"
    //   endAccessor="end"
      //style={{ height: 500}}
    />
  </div>
)

export default MyCalendar;