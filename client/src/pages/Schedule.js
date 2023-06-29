import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import "./Schedule.css"
// import BasicCalendar from "../components/BasicCalendar";

const Schedule = () => {

  const [areaData, setAreaData] = useState([]);
  const [eskomData, setEskomData] = useState([]);  

  useEffect(() => { 

    const fetchData = async () => {
       try{
            console.log(`Fetching AreaData`);
            const response = await fetch(`http://localhost:5000/areas`)
            const data = await response.json();
            setAreaData(data)
        } catch (err) {
            console.log(err);
        } 
    }
    fetchData();
    // console.log(areaData)    
  }, []);

  

    // useEffect( () => { 
    //     areaData.map((area, inx) => {
    //         let myArea = area.user_area_name
    //         const fetchEskomData = async (myArea) => {
    //             try{
    //                 console.log(`Fetching Eskom Data`);
    //                 const response = await fetch(`https://eskom-calendar-api.shuttleapp.rs/outages/${myArea}`)
    //                 const data = await response.json();
    //                 setEskomData(eskomData.concat(data))
    //             } catch (err) {
    //                 console.log(err);
    //             } 
    //         }
    //         fetchEskomData(myArea);
    //     });
    // }, []); 

     return (
        <Container className="text-center" id="schedule-container" fluid>
            <h1>Test</h1>
             {areaData.map((el, inx) => {
                return <p key={inx}>{el.user_area_name}</p>;
            })}
             {/* {eskomData?.map((obj, inx) => {
                return <p key={inx}>{obj.length}</p>;
            })}
            {console.log("All the data",eskomData)}
           */}
        </Container> 
    );
}

export default Schedule;