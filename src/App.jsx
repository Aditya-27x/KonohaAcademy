import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AttendanceForm from './Components/AttendanceForm'

function App() {


    return (
        <>
            <div className="App">
                <header>
                    <div className="logo"> <img src="/src/assets/logo.png" alt="konoha logo" /> </div>
                    <nav>
                        <ul>
                            <li><a href="#" class='active'>Home</a></li>
                            <li><a href="#">Notification</a></li>
                            <li><a href="#">Students</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                        <ul className='btn'>
                            <button>LogIn</button>
                            <button>Sign</button>
                        </ul>
                    </nav>
                    <div id="header-text">
                        <h1 className='welcome' aria-label="Welcome">
                            <span aria-hidden="true">W</span>
                            <span aria-hidden="true">e</span>
                            <span aria-hidden="true">l</span>
                            <span aria-hidden="true">c</span>
                            <span aria-hidden="true">o</span>
                            <span aria-hidden="true">m</span>
                            <span aria-hidden="true">e</span>
                        </h1>
                        <h4 className='to' aria-label='to'>
                            <span aria-hidden="true">t</span>
                            <span aria-hidden="true">o</span>
                        </h4>
                        <h1 className="konoha" aria-label='Konoha'>
                            <span aria-hidden="true">K</span>
                            <span aria-hidden="true">O</span>
                            <span aria-hidden="true">N</span>
                            <span aria-hidden="true">O</span>
                            <span aria-hidden="true">H</span>
                            <span aria-hidden="true">A</span>
                            <span aria-hidden="true">C</span>
                            <span aria-hidden="true">L</span>
                            <span aria-hidden="true">A</span>
                            <span aria-hidden="true">S</span>
                            <span aria-hidden="true">S</span>
                        </h1>
                    </div>
                    <div id="hedbtn">
                    <div><AttendanceForm /></div> 
                    </div>
                </header>
                <main>
                    <section className="hero">
                        {/* <div className="hero-content">
                            <h1>OUR <br /> CLASSROOM</h1>
                            */}
                        {/* <div className="hero-image">
                        <img src="" alt="KonohaHomePage" />
                    </div> */}
                    </section>
                </main>
            </div>

        </>
    )
}

export default App
