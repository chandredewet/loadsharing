import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { SocialIcon } from 'react-social-icons';
import editicon from '../images/user_edit.png';
import deleteicon from '../images/user_bin.png';
import UsersForm from './UsersForm';
import './EditDelUserButton.css';

const UserItem = ({user, getData}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const deleteUser = async() => {
        console.log(`Deleting user ${user.id}`)
        try{
                const response = await fetch(`http://localhost:5000/users/${user.id}`, {
                        method: 'DELETE'
                })
                if (response.status === 200) {
                        getData();
                }                 
        } catch(err) {
        console.error(err)
        }
    }

        return (
        <div>
                <ListGroup.Item as="li" className="d-flex align-items-center">
                        <SocialIcon url="mailto:chandredewet@gmail.com" bgColor={user.colour} /> 
                        <div id="username-spacing"> {user.name} <br /> {user.user_area_name} </div>
                        <div id="edit-spacing "className="d-inline-block align-items-end"> 
                                <img
                                        src={editicon}
                                        width="auto"
                                        height="30"
                                        className="d-inline-block align-centre"
                                        alt="Edit Icon"
                                        id="editbutton"
                                        onClick={handleShow}
                                />   
                                <img
                                        src={deleteicon}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-centre"
                                        alt="Delete Icon"
                                        id="delbutton"
                                        onClick={deleteUser}
                                />               
                        </div>
                </ListGroup.Item>
                
                <UsersForm show={show} handleClose={handleClose} mode="Edit" getData={getData} user={user} />
        </div>
        );
}

export default UserItem;