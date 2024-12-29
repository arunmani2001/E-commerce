import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AdminAccount() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <AccountCircleIcon/>Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/viewAdmin/:id">Account Information</Dropdown.Item>
        <Dropdown.Item href="/updateAdmin">update acccount</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminAccount;