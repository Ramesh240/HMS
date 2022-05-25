import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter as Router,Routes,Link} from 'react-router-dom'
import Register from './register'
import Login from './login'

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
              <Link to="/" className="navbar-brand">HMS</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <button type="button" className="btn btn-dark">
                <li className="nav-item">
                  <Link to ="/">Home</Link>
                </li>
                </button>
                <button type="button" className="btn btn-dark">
                <li className="nav-item">
                  <Link to ="/register">Register</Link>
                </li>
                </button>
                <button type="button" className="btn">
                <li className="nav-item">
                  <Link to ="/login">Login</Link>
                </li>
                </button>
              </ul>
              </div>
            </nav>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/Contact" element={<Contact/>}/> */}
        </Routes>
      </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById('root'))
reportWebVitals();
