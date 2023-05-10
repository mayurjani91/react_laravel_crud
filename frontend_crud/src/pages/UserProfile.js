import { useEffect, useState } from "react";
import http from "../http";
export  function Userprofile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const styleH = {
    marginLeft:"10%",
    marginRight:"10%",

  }
  const fetchUser = () => {
    
  const storedToken = localStorage.getItem("accesstoken");
    http.get("auth/user-profile",{
      headers: {
        "Authorization": `Bearer ${storedToken}`
      }
    }).then((res) => {
      setUsers(res.data);
    });
  };
  return (
    <div className="container mt-3">
        <h4 className="text-center">Users Details</h4>
       
          <h3 style={styleH}>Id : {users.id} </h3>
          <h3 style={styleH}>Name : {users.name} </h3>
          <h3 style={styleH}>Email : {users.email} </h3>
          


        
    </div>
  )
}
