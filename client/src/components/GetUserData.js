import { useEffect, useState } from 'react';

const GetUserData = () => {

    const [usersData, setUsersData] = useState([]);
      
    const getData = async () => {
      try{
        console.log("Fetching data...");
        const response = await fetch("http://localhost:5000/users")
        const data = await response.json();
        setUsersData(data);
      } catch (err) {
          console.log(err);
      }
    }  
   
    useEffect( () => { getData() }, []);

    //sort by id
    const sortedUsersData = usersData?.sort((a,b) => a.id - b.id);
    return (sortedUsersData, getData);
}

export default GetUserData;