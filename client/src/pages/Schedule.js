import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import "./Schedule.css"
import BasicCalendar from "../components/BasicCalendar";
import moment from "moment";
import Button from 'react-bootstrap/Button';

const Schedule =  ({usersData}) => {

  // console.log({usersData})
  const [areaData, setAreaData] = useState([]);
  const [eskomData, setEskomData] = useState([]);  
  const [schedules, setSchedules] = useState([]);  
  const [scheduleButtonClicked, setScheduleButtonClicked] = useState(false);
  // let dbEvents = 
  // [{"area_name": "city-of-cape-town-area-11",
  // "start": "2023-07-01T00:00:00+02:00",
  // "finsh": "2023-07-01T02:00:00+02:00",
  // "name":"Chezlin",
  // colour:"blue"},
  // {"area_name": "city-of-cape-town-area-11",
  // "start": "2023-06-30T23:00:00+02:00",
  // "finsh": "2023-07-01T00:00:00+02:00",
  // name:"Judy",
  // colour: "green",},
  // {"area_name": "city-of-cape-town-area-11",
  // "start": "2023-06-30T22:00:00+02:00",
  // "finsh": "2023-06-30T23:00:00+02:00",
  // name:"Chandre De Wet",
  // colour: "pink",},{"area_name": "city-of-cape-town-area-11",
  // "start": "2023-07-01T08:00:00+02:00",
  // "finsh": "2023-07-01T10:00:00+02:00",
  // name:"Judy",
  // colour: "green",}];

  // let myEventsList = dbEvents.map((outage) => {
  //       return  {
  //           start: moment(outage.start).toDate(),
  //           end: moment(outage.finsh).toDate(),
  //           title: `${outage.name} - ${outage.area_name}`,
  //           colour: outage.colour,  
  //       }
  // }) 

  // console.log(myEventsList)

  let myEventsList = schedules.map((outage) => {
    return  {
        start: moment(outage.start).toDate(),
        end: moment(outage.finsh).toDate(),
        title: `${outage.name} - ${outage.area_name}`,
        colour: outage.colour,  
    }
}) 

  const postAreaData = async (el) => {
    console.log(el)
    try {
      const response = await fetch("http://localhost:5000/areas",
      {
        method: "POST",
        body: JSON.stringify(el),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.status === 200) {
        console.log ("Success", response)
        // await new Promise(resolve => setTimeout(resolve, 500));
        // const data = await getData();      
      }
    } catch(err) {
      console.error(err);
    }
  }  

  const getEskomData = async (el) => {
    try {
      console.log("Fetching Eskom data...");
      const response = await fetch(`https://eskom-calendar-api.shuttleapp.rs/outages/${el}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  } 

  const postSchedule = () => {
    console.log("Posting schedule to backend")
    console.log("eskom Data", eskomData);
    console.log("user Data", usersData);
  
    for (let user of usersData) {
      console.log("user", user)
      let outages = eskomData.filter(el => el.area_name === user.user_area_name)
      console.log("outages", outages)
      outages.forEach((outage,inx) => {
        console.log(outage)
        setSchedules(schedules.concat(
        {
          schedule_area_name: user.user_area_name, 
          start: outage.start,
          finsh: outage.finsh, 
          name: user.name,
          colour: user.colour
        }));
      });
    }
  
    console.log("here is final schedules",schedules)
   

    // try {
    //   const response = await fetch("http://localhost:5000/schedule", {
    //     method: "POST",
    //     body: JSON.stringify(el),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (response.status === 200) {
    //     console.log ("Success", response)
    //     await new Promise(resolve => setTimeout(resolve, 500));     
    //   }
    // } catch(err) {
    //   console.error(err);
    // }
  }  
    
  
        
  useEffect(() => {
    if (scheduleButtonClicked) {
     
      const fetchEskomData = async () => {
        for (const el of areaData) {
          try {
            const data = await getEskomData(el);
            setEskomData(data);
            console.log(eskomData)
            postSchedule(eskomData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      }
      fetchEskomData();
    }
  }, [scheduleButtonClicked, areaData]);

  const handleSchedule = () => {
      let areas = usersData.map(el => el.user_area_name);
      let uniqueAreas = [...new Set(areas)];
      console.log("Unique",{uniqueAreas});
      setAreaData(areaData.concat(...uniqueAreas));
      console.log({areaData})
      setScheduleButtonClicked(true);
  };

   return (
        <Container className="text-center" id="schedule-container" fluid>
            <div className="d-flex justify-content-end">
              <Button className="text-right my-4" onClick={handleSchedule}> Get Latest Schedule </Button>
            </div> 
            
            {//eskomData.map((el, inx) => <p key={inx}>{el.finsh}</p>)
            } 
          
            { /* {areaData.map((el, inx) => {
                return <p key={inx}>{el.user_area_name}</p>;
            })} */
             /* {eskomData?.map((obj, inx) => {
                return <p key={inx}>{obj.length}</p>;
            })}
            {console.log("All the data",eskomData)}
           */}
           {/* < cleanedEventList /> */}
           <div style={{ height: "600px" }}>
          <BasicCalendar myEventsList={myEventsList}/>
          </div>           
        </Container> 
    );
}

export default Schedule;