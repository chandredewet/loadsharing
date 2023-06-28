import Button from 'react-bootstrap/Button';
import ButtonAddUser from './ButtonAddUser'

const CallToActionButtons =({ href, getData, userData }) => {
    
    
        return (

            <div id="button-container">
            {   href ? 
                 <Button variant="primary" href={href} id="button-add">
                    Add User
                </Button>
            
                : <ButtonAddUser getData={getData} userData={userData}/>
             }
            
                <Button variant="outline-primary" href="/schedule" id="button-schedule">
                    See Schedule
                </Button>
            </div>
        )
    
   
}

export default CallToActionButtons;