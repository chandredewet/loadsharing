import Button from 'react-bootstrap/Button';
import ButtonAddUser from './ButtonAddUser'

const CallToActionButtons =({ href, setUsersData }) => {   
    
    return (
    // multipurpose use of call to action buttons, if on firstpage open add user if on add user bring up form
        <div id="button-container">
            {href ? 
                <Button variant="primary" href={href} id="button-add" >
                    Add User
                </Button>
                : <ButtonAddUser setUsersData={setUsersData} />
            }
            
            <Button variant="outline-primary" href="/schedule" id="button-schedule">
                See Schedule
            </Button>
        </div>
    );  
}

export default CallToActionButtons;