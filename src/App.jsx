import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


    return (
        <>
            <div className="App">
                <header>
                    <div className="logo"> <img src="/src/assets/logo.png" alt="konoha logo" /> </div>
                    <nav>
                        <ul>
                            <li><a href="#" class='active'>Home</a></li>
                            <li><a href="#">Students</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                        <ul className='btn'>
                            <button>LogIn</button>
                            <button>Sign</button>
                        </ul>
                    </nav>
                    <div id="header-text">
                        <h1 className='welcome'>Welcome</h1>
                        <h4 className='to'>to</h4>
                        <h1 className="konoha">KONOHA</h1>
                    </div>
                    <div id="hedbtn">
                    <button className="get-started">Enroll Now!</button>
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
