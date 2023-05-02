import { useEffect, useState } from "react";
import http from "../http";
import { Link } from "react-router-dom";
export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  function deleteRecord(id){
    http.post("users/delete",id).then((res) => {
      fetchAllUsers();
    });
  }
  return (
    <div>
    <h4>Users list</h4>
    <table className="table">
      <thead>
        <tr>

        <th>Sno</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>(
        <tr key={user.id}>
          <td>{++index}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
          <Link className="btn btn-info" to={{pathname:"/edit/"+user.id}}>Edit</Link>
            <span>   </span>
            <button className="btn btn-danger" id={user.id} onClick={()=>{deleteRecord(user.id)}}>Delete</button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
