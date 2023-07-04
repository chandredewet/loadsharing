import React, { useEffect, useState } from 'react';
import './Users.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import UserItem from '../components/UserItem'
import CallToActionButtons from '../components/CallToActionButtons';
import getData from '../functions/getData';

const Users = ({usersData,setUsersData}) => {

const sortedUsersData = usersData?.sort((a,b) => a.id - b.id);

const handleDataUpdate = async () => {
  try {
    const data = await getData();
    setUsersData(data); // Update the usersData state using setUsersData
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  handleDataUpdate(); // Fetch data initially
}, []); // Run only once


  return (
    <Container  className="text-center" id="home-container" fluid>
      <Row className="justify-content-center d-flex align-items-center">
        <h1 className="text-start" id="users-heading">Users.</h1>
        <p className="my-4 text-start">The current users added to  your system. Use form below to add new users  below or edit/delete existing users. Select Schedule to see upcoming loadshedding for your added users.</p>                
        <ListGroup id="user-group" className="text-start">
          {sortedUsersData.map((user,inx)=> (           
            <UserItem key={inx} user={user} setUsersData={setUsersData}/>
          ))} 
        </ListGroup>        
        <CallToActionButtons  setUsersData={setUsersData}/>         
      </Row>
    </Container> 
  );
}    

export default Users;