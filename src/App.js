import logo from './medical-assistance.png';
import './App.css';
import React from 'react'

export class App extends React.Component {
  render() {
    return (
      <div>
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Hospital Mangement</h1>
        </header>
        <div className='Main'>
          <h1>
            Welcome To Time Hospital!!!
          </h1>
          <br></br>
          <ul>Why Time
            <li>
              Round-the-clock doctor availability</li><li>
              Broad range of Specialities</li><li>
              Detailed digital prescriptions</li><li>
              Digitised health records
            </li>
          </ul>
        </div>
        <footer class="bg-light text-center text-lg-start">
          <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            &copy; 2022 Copyright:<br>
            </br>
            <h3>
              Designed and Developed By Podteam
            </h3>
          </div>
        </footer>
      </div>
    )
  }
}

export default App