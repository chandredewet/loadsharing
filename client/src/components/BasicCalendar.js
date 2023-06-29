import moment from "moment";
import Calendar from "./Calendar";

// const myEventsList = [
//   {
//     start: moment("2023-06-28T07:00:00+02:00").toDate(),
//     end: moment("2023-06-28T08:30:00+02:00").toDate(),
//     title: "Chandre - city-of-cape-town-area-11",
//     colour: "#FF8D5C",
//   },
//   {
//     start: moment("2023-06-28T14:00:00+02:00").toDate(),
//     end: moment("2023-06-28T16:00:00+02:00").toDate(),
//     title: "Chandre - city-of-cape-town-area-11",
//     colour: "#FF8D5C",
//   },
//   {
//     start: moment("2023-06-28T16:00:00+02:00").toDate(),
//     end: moment("2023-06-28T16:30:00+02:00").toDate(),
//     title: "Chandre - city-of-cape-town-area-11",
//     colour: "#FF8D5C"
//   },
//   {
//     start: moment("2023-06-29T20:00:00+02:00").toDate(),
//     end: moment("2023-06-29T22:30:00+02:00").toDate(),
//     title: "Chandre - city-of-cape-town-area-11",
//     colour: "#FF8D5C",
//   },
//   {
//     start: moment("2023-06-29T20:00:00+02:00").toDate(),
//     end: moment("2023-06-29T22:30:00+02:00").toDate(),
//     title: "Judy - city-of-cape-town-area-2",
//     colour: "green",
//   },
// ];

export default function BasicCalendar() {
  return (
     <div style={{ height: 500}}>
        <Calendar 
            events={myEventsList} 
            defaultView="week" 
            views={["month", "week", "day"]}     
            BackgroundWrapper = "black"
             eventPropGetter={(myEventsList) => {
                const backgroundColor = myEventsList.colour ? myEventsList.colour : 'blue';
                const color = "black";
                const border = myEventsList.colour;
                const padding = "5px";
                return { style: { backgroundColor, border, color, padding } }
            }}
        />;
    </div>
  );
}