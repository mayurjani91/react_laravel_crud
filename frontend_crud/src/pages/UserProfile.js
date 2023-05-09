import { useEffect, useState } from "react";
import http from "../http";
export  function Userprofile() {
  const styleP = {
    marginLeft:"10%",
    marginRight:"10%",

  }
  const fetchUser = () => {
    http.get("/user-profile").then((res) => {
      alert(res);
    });
  };
  return (
    <div className="container">
        <h4 className="text-center">Users Details</h4>
        <p style={styleP}>Name : mayur Jani</p>
    </div>
  )
}
