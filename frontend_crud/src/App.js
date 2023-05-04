// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Create } from "./pages/Create";
import { Edit } from "./pages/Edit";
import { LoginForm } from "./pages/LoginForm";
import { RegistrationForm } from "./pages/RegistrationForm";
function App() {
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
          </div>
        </nav>
      )}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
