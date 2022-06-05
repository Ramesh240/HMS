import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter as Router,Routes,Link} from 'react-router-dom'
import Register from './register'
import Login from './login'
import PasswordPage from './PasswordPage';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
const routing=(
  <Router>
    <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">Hospital Management System</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <button type="button" className="btn btn-dark">
                <li className="nav-item">
                  <Link to ="/"><i class="bi bi-house-door"></i>Home</Link>
                </li>
                </button>
                <button type="button" className="btn btn-dark">
                <li className="nav-item">
                  <Link to ="/register" ><i class="bi bi-person"></i>Register </Link>
                </li>
                </button>
                <button type="button" className="btn">
                <li className="nav-item">
                  <Link to ="/Login"><i class="bi bi-person-check"></i>Login</Link>
                </li>
                </button>
              </ul>
              </div>
            </nav>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/passwordPage" element={<PasswordPage/>}/>
       
        </Routes>
      </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById('root'))
reportWebVitals();
