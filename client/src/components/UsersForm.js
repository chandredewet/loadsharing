
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Areas from './../data/Areas';

const UsersForm = ({addUser}) => {

const [name, setName] = useState(""); 
const [email, setEmail] = useState("");  
const [colour, setColour] = useState("#563D73");  
const [area, setArea] = useState("");  
const [rerender,setRerender] = useState(false); 
//{id: 1, name: 'Chandre De Wet', email: 'chandredewet@gmail.com', colour: '#FF8D5C', user_area_name: 'city-of-cape-town-area-10'}

const handleAdd = (event) => {

    event.preventDefault();
    console.log("Sending data to server");

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify({
        name, email, colour,area
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setRerender(true);
} 
    return(
    <div className="text-center">                
        <Form 
            className="shadow p-3 mb-5 bg-white rounded" 
            noValidate
            autoComplete="off"
            onSubmit={handleAdd}>
    
            <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control placeholder="Enter Name" type="text" minLength="3" maxLength="50" required 
            value={name}
            onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </Form.Group> 

            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control
                type="color"
                id="exampleColorInput"
                title="Choose your color"
                value={colour}
                onChange={(e) => setColour(e.target.value)}  
            />

            <Form.Group className="mb-3">
            <Form.Label>Choose your Area</Form.Label>
            <Form.Select
                value={area}
                onChange={(e) => setArea(e.target.value)}        
            >
                {Areas.map((area,inx) => (
                <option key={inx} value={area}>{area}</option>
                ))}            
            </Form.Select>
            </Form.Group> 

            <Button variant="primary" href="/users" id="button-add">Add User</Button> {' '}  
        </Form> 
        </div>
    );
}

export default UsersForm;