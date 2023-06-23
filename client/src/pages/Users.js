import React, { useState, useEffect } from 'react';
import './Users.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { SocialIcon } from 'react-social-icons';
import DeleteUserButton from '../components/DeleteUserButton';
import EditUserButton from '../components/EditUserButton';
import UsersForm from '../components/UsersForm';


const Users = () => {

  const initialError = {
      errorExists: false,
      errorStatus: 0,
      errorMessage: "",
  };

  const [userData, setUserData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorInfo, setErrorInfo] = useState(initialError);
    
  
  //fetching existing user data
  useEffect( () => {
    console.log("Fetching data...");
    fetch("http://localhost:5000")
      .then((res) => {
        if (res.status >= 300) {
          setErrorInfo((errorInfo) => ({ ...errorInfo, errorExists: true }));
          setErrorInfo((errorInfo) => ({
            ...errorInfo,
            errorStatus: res.status,
          }));
          setErrorInfo((errorInfo) => ({
            ...errorInfo,
            errorMessage: res.statusText,
          }));
          console.log(res.status, errorInfo.errorStatus);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          setUserData(data);
          setLoaded(true);
          console.log(userData);
          console.log(loaded);
        }
      });
  }, [errorInfo.errorStatus, loaded, userData]);
  
    
     
  return (
    <Container  className="text-center" id="home-container" fluid>
      <Row className="justify-content-center d-flex align-items-center">
        
        <h1 className="text-start" id="users-heading">Users.</h1>
        <p className="my-4 text-start">The current users added to  your system. Use form below to add new users  below or edit/delete existing users. Select Schedule to see upcoming loadshedding for your added users.</p>                
        
        <ListGroup id="user-group" className="text-start">
            {userData.map((user,inx)=> (           
              <ListGroup.Item key={inx} as="li" className="d-flex align-items-center">
                <SocialIcon url="mailto:chandredewet@gmail.com" bgColor={user.colour} /> 
                <div id="username-spacing"> {user.name} <br /> {user.area} </div>
                <div id="edit-spacing "className="d-inline-block align-items-end"> 
                    <EditUserButton />
                    <DeleteUserButton />                         
                </div>
              </ListGroup.Item>
            ))} 
          </ListGroup>
          
          <h2 className="my-5">Add/Edit/Form</h2>
          
          <UsersForm  />
                    
        </Row>
      </Container> 
  );
}    

export default Users;