import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import UsersForm from './UsersForm';

const ButtonAddUser =({getData}) => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
                
  return (
    <div>
      <Button variant="primary" onClick={handleShow} id="button-add">
        Add User
      </Button>
      <UsersForm show={show} handleClose={handleClose} mode="Add" getData={getData} />  
    </div>
  );
}

export default ButtonAddUser;