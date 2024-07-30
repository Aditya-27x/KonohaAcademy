import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
       <div className="App">
            <header>
                <div className="logo">LOGO</div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                    <ul>
                    <button>LogIn</button>
                    <button>Sign</button>
                    </ul>
              
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>OUR <br /> CLASSROOM</h1>
                        <button className="get-started">Get started</button>
                    </div>
                    <div className="hero-image">
                        {/* <img src="path_to_your_image" alt="Online Education" /> */}
                    </div>
                </section>
            </main>
        </div>
    
    </>
  )
}

export default App
