import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import AttendanceForm from './Components/AttendanceForm'
import Notifications from './Components/Notifications';
import HeaderText from './Components/HeaderText'
// import { Students } from './Components/students/Students';
import Footer from './Components/Footer'

const cards = [
    {
        title: "Assignment Due-date",
        content: "Assignment due date is announced!!",
        image: "/src/assets/notification/assignment.jpeg"
    },

    {
        title: "Exam date",
        content: "your Exam date is Announced!",
        image: "/src/assets/notification/exam.jpeg"
    },

    {
        title: "Project submission",
        content: "Project submissions opens",
        image: "/src/assets/notification/project.jpeg"
    }
];

function App() {


    return (
        <>
            
            <div className="App">
          
                <header>
                    <div className="logo"> <img src="/src/assets/logo.png" alt="konoha logo" /> </div>
                    <nav>
                        <ul>
                            <li><a href="#active" class='active'>Home</a></li>
                            <li><a href="#notification">Notification</a></li>
                            <li><a href="#">Student</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>

                        <ul className='btn'>
                            <button>LogIn</button>
                            <button>Sign</button>
                        </ul>
                    </nav>

                    <HeaderText />

                    <div id="hedbtn">
                        <div><AttendanceForm /></div>
                    </div>
                </header>
                <main>
                    <div id='notification' className="notification">
                        <h1>Notifications</h1>
                        <Notifications cards={cards} interval={3000} />
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
            
        </>
    )
}

export default App
