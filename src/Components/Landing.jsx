import {Link}  from 'react-router-dom'
import '../Style/Landing.css'

const Landing = () =>{
    return(
        <div className="page">
            <Link to="/Adminlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYZRnFinCRXJw89SIRVXYnX27jjH5CmpqEgxAaKUfAGyD7kACvXutDSl51VPBaSPlLTE&usqp=CAU" alt="" />
                <h1>Admin</h1>
            </Link>
            <Link to="/Userlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Xa6xhFHZ8qOVyliMhqu_zgwF868lj88qkMcqba9DW5NfHN44wYkyek7Tzs-w3vklQo4&usqp=CAU" alt="" />
                <h1>User</h1>
            </Link>
        </div>
    );
}
export default Landing