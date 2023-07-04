import Calendar from "./Calendar";

export default function BasicCalendar({myEventsList}) {

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