import React, { useState, useEffect } from 'react';
import './Users.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import UsersForm from '../components/UsersForm';
import UserItem from '../components/UserItem'
import CallToActionButtons from '../components/CallToActionButtons';

const Users = () => {

  const [userData, setUserData] = useState([]);
    
  const getData = async () => {
    try{
      console.log("Fetching data...");
      const response = await fetch("http://localhost:5000/users")
      const data = await response.json();
      setUserData(data);
    } catch (err) {
        console.log(err);
    }
  }  
 
  useEffect( () => { getData() }, []);

  console.log("testing userData", userData);     
  return (
    <Container  className="text-center" id="home-container" fluid>
      <Row className="justify-content-center d-flex align-items-center">
        
        <h1 className="text-start" id="users-heading">Users.</h1>
        <p className="my-4 text-start">The current users added to  your system. Use form below to add new users  below or edit/delete existing users. Select Schedule to see upcoming loadshedding for your added users.</p>                
        <div>
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
        
        <CallToActionButtons getData={getData} userData={userData}/>
              
          {/* <UsersForm  /> */}
                    
        </Row>
      </Container> 
  );
}    

export default Users;