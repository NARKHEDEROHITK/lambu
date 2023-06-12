import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
            <h1>Append</h1>
            <span>.</span>
        </a>

        {/* <!-- Nav Menu --> */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="index.html" className="active">Home</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#portfolio">Portfolio</a></li>
            <li><a href="index.html#team">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li className="dropdown has-dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down"></i></a>
              <ul className="dd-box-shadow">
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown has-dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down"></i></a>
                  <ul className="dd-box-shadow">
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>

          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        {/* <!-- End Nav Menu --> */}

        <a className="btn-getstarted" href="index.html#about">Get Started</a>

      </div>
    </header>
    </>
  )
}

export default App
