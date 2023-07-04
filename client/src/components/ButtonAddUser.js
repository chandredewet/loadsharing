import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import UsersForm from './UsersForm';

const ButtonAddUser =({setUsersData}) => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
                
  return (
    <div>
      <Button variant="primary" onClick={handleShow} id="button-add">
        Add User
      </Button>
      <UsersForm show={show} handleClose={handleClose} mode="Add" setUsersData={setUsersData}/>  
    </div>
  );
}

export default ButtonAddUser;