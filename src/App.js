import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "./store/users/usersActions";

function App() {
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state);
  
  useEffect(() => {
    return () => {
      dispatch(loadUsers());
    }
  }, []);
  
  return (
    <div className="App">
        {
          users.map((user) => (
            <div className="user" key={user.id}>
              <h2>Name: {user.name}</h2>
              <span>Username: {user.username}</span>
              <span>Email: {user.email}</span>
              <span>Phone: {user.phone}</span>
              <span>Address: {user.address.street}</span>
              <span>Website: {user.website}</span>
              <span>Company: {user.company.name}</span>
            </div>
          ))
        }
    </div>
  );
}

export default App;
