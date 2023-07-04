import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Areas from './../data/Areas';
import Modal from 'react-bootstrap/Modal';
import getData from '../functions/getData';


const UsersForm = ({ mode, show, handleClose, user, setUsersData}) => {


const editMode = mode === "Edit" ? true : false;

const [userData, setUserData] = useState({
  name: editMode ? user.name : "",
  email: editMode ? user.email: "",
  colour: editMode ? user.colour :"#000000",
  area: editMode ? user.area : ""})

const handleChange = (e) => {
  const {name, value} = e.target;
    setUserData(userData => ({
    ...userData, 
    [name] : value 
  }))
}

const handleAdd = async (event) => {
  event.preventDefault();
  console.log("Sending data to server");
  
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log ("Success", response)
      await new Promise(resolve => setTimeout(resolve, 500));
      getData();
      handleClose();       
    }
  } catch(err) {
    console.error(err);
  }
} 

const handleEdit = async (event) => {
  event.preventDefault();
  console.log(`Editing user ${user.id}`)
  try{
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method:"PUT",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(userData)
    })
    if (response.status === 200) {
       
      console.log ("Success", response)
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = await getData();
      setUsersData(data);
      handleClose();       
    }
  } catch(err) {
    console.error(err);
  }
}

  return(
    <div className="text-center">  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mode} User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form 
            className="shadow p-3 mb-5 bg-white rounded" 
            noValidate
            autoComplete="off"
            >
    
              <Form.Group className="mb-3">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control placeholder="Enter Name" type="text" minLength="3" maxLength="50" required 
              name="name"
              value={userData.name}
              onChange={handleChange}
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required 
              name="email"
              value={userData.email}
              onChange={handleChange} />
              </Form.Group> 

              <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
              <Form.Control
                  type="color"
                  id="exampleColorInput"
                  title="Choose your color"
                  name="colour"
                  value={userData.colour}
                  onChange={handleChange}   
              />

              <Form.Group className="mb-3">
                <Form.Label>Choose your Area</Form.Label>
                <Form.Select
                    name="area"
                    value={userData.area}
                    onChange={handleChange}
                >
                    {Areas.map((area,inx) => (
                    <option key={inx} value={area}>{area}</option>
                    ))}                 
                </Form.Select>
              </Form.Group> 
            </Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editMode ? handleEdit : handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
        
    );
}

export default UsersForm;