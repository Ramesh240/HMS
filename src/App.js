import './App.css';
import React from 'react'
import img1 from './images/hospitalimg1.jpg'
import img2 from './images/human-skeleton-g56f3393a6_1280.jpg'
import img3 from './images/pulse-trace-g2d333539a_1280.jpg'

export class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <header className='App-header shadow p-3 mb-5 bg-body rounded container-sm mt-3'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img src={img1} className="h-25 d-inline-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to Time Hospital!!!</h5>
                <p>Hospitals are about Healing.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <img src={img2} className="h-25 d-inline-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <p>Even when we think we cannot Rise up there is still Hope.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
               <img src={img3} className="h-25 d-inline-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <p>Hope is being able to see that there is light despite all of the darkness</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </header>
        <section id="main">
        <div>
          <h1>Welcome To Time Hospital!!!</h1>
          <br></br>
          <div id="content">
          <ul>Why Time
            <li>
              Round-the-clock doctor availability
            </li>
              <li>
              Broad range of Specialities
              </li>
              <li>
              Detailed digital prescriptions
              </li>
              <li>
              Digitised health records
            </li>
          </ul>
          </div>
        </div>
        </section>
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