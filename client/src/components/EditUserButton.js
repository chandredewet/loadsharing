import editicon from '../images/user_edit.png';
import './EditUserButton.css';

const EditUserButton = () => {

    return (
      <img
                          src={editicon}
                          width="24"
                          height="24"
                          className="d-inline-block align-centre"
                          alt="Edit Icon"
                          id="editbutton"
                          />
    );
  }
  
  export default EditUserButton;