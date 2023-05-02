// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {Create} from './pages/Create';
import { Edit } from './pages/Edit';

function App() {
  return (
    <div>
       <nav className='navbar navbar-expand navbar-dark bg-dark' >
        <div className='navbar-nav mr-auto'>
            <li>
              <Link rel="stylesheet" to={"/"} className='nav-link' >Home</Link>
            </li>
            <li>
              <Link rel="stylesheet" to={"create"} className='nav-link' >Create</Link>
            </li>
        </div>
       </nav>
       <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
       </div>
    </div>
  );
}

export default App;
