import React from 'react';
import './Users.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { SocialIcon } from 'react-social-icons';
import Form from 'react-bootstrap/Form';
import DeleteUserButton from '../components/DeleteUserButton';
import EditUserButton from '../components/EditUserButton';
import Areas from "./Areas";

const Users = () => {

    let usersArr = [{key: 0, name: "Chandre", area: "CityofCapeTownArea10", email: "chandredewet@gmail.com", colour:"#2F34FF" }, {key: 1,name: "Chezlin", area: "CityofCapeTownArea6", email: "chezlinbenson11@gmail.com", colour:"#2F34FF" },{key: 0,name: "Chandre", area: "CityofCapeTownArea10", email: "chandredewet@gmail.com", colour:"#2F34FF" },{key: 0,name: "Chandre", area: "CityofCapeTownArea10", email: "chandredewet@gmail.com", colour:"#2F34FF" }];

    return (
        <Container  className="text-center" id="home-container" fluid>
            <Row className="justify-content-center d-flex align-items-center">
                <h1 className="text-start" id="users-heading">Users.</h1>
                <p className="my-4 text-start">The current users added to  your system. Use form below to add new users  below or edit/delete existing users. Select Schedule to see upcoming loadshedding for your added users.</p>                
                <ListGroup id="user-group" className="text-start">
                {usersArr.map((user,inx)=> (           
                    <ListGroup.Item key={inx} AS="li" className="d-flex align-items-center">  <SocialIcon url="mailto:chandredewet@gmail.com" bgColor={user.colour} /> <div id="username-spacing"> {user.name} <br /> {user.area} </div>
                    <div id="edit-spacing "className="d-inline-block align-items-end"> 
                        <EditUserButton />
                        <DeleteUserButton />                         
                    </div>
                    </ListGroup.Item>
                    ))
                } 
            </ListGroup>
            <h2 my-5>Add/Edit/Form</h2>
            <div className="text-center">                
            <Form className="shadow p-3 mb-5 bg-white rounded">
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control placeholder="Enter Name" type="text" minlength="3" maxlength="8" required  />
      </Form.Group>

         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" required  />
         </Form.Group> 

        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your #hex color"
      /> 
       <Form.Group className="mb-3">
        <Form.Label>Choose your Area</Form.Label>
        <Form.Select>

            {Areas.map((area,inx) => (
                <option key={inx}>{area}</option>
            ))}            
        </Form.Select>
      </Form.Group> 
      <Button variant="primary" href="/users" id="button-add">Add User</Button> {' '}  
     </Form> 
     </div>
     </Row>
        </Container> 
    );
}    

export default Users;