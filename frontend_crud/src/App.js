// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { Create } from "./pages/Create";
import { Edit } from "./pages/Edit";
import { LoginForm } from "./pages/LoginForm";
import { RegistrationForm } from "./pages/RegistrationForm";
import { useEffect} from "react";
import { Userprofile } from "./pages/UserProfile";

function App() {
  const navigate  = useNavigate();


  


  useEffect(() => {
    const storedToken = localStorage.getItem("accesstoken");
    // alert(storedToken);
    if (storedToken == null) {
      navigate("/");
    } 
    // else {
    //   navigate("/home");
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 const logout = () => {
    localStorage.clear();
    window.location.href = '/';
}
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/registrationForm";

  return (
    <div>
      {!hideNavbar && (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li>
              <Link rel="stylesheet" to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" to={"create"} className="nav-link">
                Create
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" onClick={()=>{logout()}} className="nav-link">
                Logout
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" to={"userProfile"} className="nav-link">
              User Profile
              </Link>
            </li>
          </div>
          <div>
          <li className="ml-auto">

            </li>
          </div>
        </nav>
      )}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/userProfile" element={<Userprofile />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
