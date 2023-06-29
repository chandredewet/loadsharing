import React, { useEffect, useState } from 'react';
import './Users.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import UserItem from '../components/UserItem'
import CallToActionButtons from '../components/CallToActionButtons';

const Users = () => {

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

  return (
    <Container  className="text-center" id="home-container" fluid>
      <Row className="justify-content-center d-flex align-items-center">
        <h1 className="text-start" id="users-heading">Users.</h1>
        <p className="my-4 text-start">The current users added to  your system. Use form below to add new users  below or edit/delete existing users. Select Schedule to see upcoming loadshedding for your added users.</p>                
        <ListGroup id="user-group" className="text-start">
          {sortedUsersData.map((user,inx)=> (           
            <UserItem key={inx} user={user} getData={getData} />
          ))} 
        </ListGroup>        
        <CallToActionButtons getData={getData}/>         
      </Row>
    </Container> 
  );
}    

export default Users;