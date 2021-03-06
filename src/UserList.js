import {Link} from "react-router-dom";

const {useEffect} = require("react");
const {useState} = require("react");
const UserList = () => {
  const [users, setUsers] = useState([]);
  const findAllUsers = () =>
    fetch("http://localhost:8080/api/users")
      .then(response => response.json())
      .then(users => setUsers(users));
  useEffect(findAllUsers, []);
  return(
    <ul>
      {
        users.map(user =>
        <li key={user.userId}>
          <Link to={`/users/${user.userId}`}>
            {user.firstName}
          </Link>
        </li>
        )
      }
    </ul>
  )
}
export default UserList;