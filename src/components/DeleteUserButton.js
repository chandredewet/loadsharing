
import deleteicon from './../images/user_bin.png';
import './DeleteUserButton.css';

const DeleteUserButton = () => {

  return (
    <img
                        src={deleteicon}
                        width="24"
                        height="24"
                        className="d-inline-block align-centre"
                        alt="Delete Icon"
                        id="delbutton"
                        />
  );
}

export default DeleteUserButton;