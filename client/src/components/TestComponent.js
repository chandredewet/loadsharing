import React, { useState, useEffect } from 'react';
import UserItem from '../components/UserItem'
import ListGroup from 'react-bootstrap/ListGroup';

const TestComponent = () => {
  const [userData, setUserData] = useState([]);
    
  const getData = async () => {
    try{
      console.log("Fetching data...");
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch("http://localhost:5000/users")
      const data = await response.json();
      setUserData(data);
    } catch (err) {
        console.log(err);
    }
  }  
  //fetching existing user data
  useEffect( () => { getData() }, []);

    return(
        <div>
            <p>here are the users</p>
            {userData ? (
            <ListGroup id="user-group" className="text-start">
            {userData.map((user,inx)=> (           
              <UserItem key={inx} user={user} getData={getData} />
            ))} 
          </ListGroup>
          ) : (
            <span> Users Loading...</span>
          )}
        </div>
    );
}

export default TestComponent;