import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Navbar } from './Components/Navbar';
import AttendanceForm from './Components/AttendanceForm'
import Notifications from './Components/Notifications';
import HeaderText from './Components/HeaderText'
import { Students } from './Components/students/Students';
import Footer from './Components/Footer'
import { Projects } from './Components/projects/Projects';

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
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.querySelector('nav ul li a.active');
            if (homeSection) {
                const { top } = homeSection.getBoundingClientRect();
                setShowScrollButton(top < 0); 
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const studentsCard = [
        {
            name: "Tony Mark",
            skill: "Web Developer",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eius odit excepturi ratione perferendis ex.",
            imgSrc: "/src/assets/students-imgs/student-1.jpeg"
        },
        {
            name: "Sarah Lee",
            skill: "UI/UX Designer",
            description: "Sarah is an expert in crafting beautiful and functional user interfaces.",
            imgSrc: "/src/assets/students-imgs/student-2.jpeg"
        },
        {
            name: "Alex Chen",
            skill: "Software Engineer",
            description: " A dedicated software engineer with a passion for developing scalable web applications.",
            imgSrc: "/src/assets/students-imgs/student-3.jpeg"
        },
        {
            name: "Ayesha Patel",
            skill: "Data Scientist",
            description: "Ayesha has a strong analytical mind and excels in data analysis and visualization.  ",
            imgSrc: "/src/assets/students-imgs/student-4.jpeg"
        },
        {
            name: "Rohan Mehta",
            skill: "Full Stack Developer",
            description: "Rohan is a versatile developer with expertise in both frontend and backend technologies.",
            imgSrc: "/src/assets/students-imgs/student-5.jpeg"
        },
        {
            name: "Maya Jefferson",
            skill: "UI/UX Designer",
            description: "Maya focuses on crafting intuitive and user-friendly interfaces for web and mobile applications.",
            imgSrc: "/src/assets/students-imgs/student-6.jpeg"
        },
        {
            name: "Priya Singh",
            skill: "Cybersecurity Analyst",
            description: "Priya is passionate about cybersecurity and specializes in protecting systems from cyber threats",
            imgSrc: "/src/assets/students-imgs/student-7.jpeg"
        },
        {
            name: "Vivek Sharma",
            skill: "Cloud Engineer",
            description: " Vivek specializes in cloud computing, with a focus on deploying and managing scalable cloud infrastructures. ",
            imgSrc: "/src/assets/students-imgs/student-8.jpeg"
        },
    ];

    const projectCard = [
        {
            imgsrc: "/src/assets/projects-imgs/project-1.png",
            title: "Personal Finance Management App",
            description: "Create a web or mobile application that helps users manage their personal finances, track expenses, set budgets, and analyze spending patterns."
        },
        {
            imgsrc: "/src/assets/projects-imgs/project-2.jpeg",
            title: "Smart Home System",
            description: "Build a system that allows users to control various home appliances (lights, thermostat, security cameras) through a centralized web or mobile app."
        },
        {
            imgsrc: "/src/assets/projects-imgs/project-3.png",
            title: "AI Chatbot for Customer Support",
            description: "Develop an intelligent chatbot that can handle customer queries, provide recommendations, and escalate issues to human agents if needed."
        },
        {
            imgsrc: "/src/assets/projects-imgs/project-4.png",
            title: "Online Learning Platform",
            description: "Create a platform where users can enroll in courses, watch video lectures, take quizzes, and track their progress."
        },
        {
            imgsrc: "/src/assets/projects-imgs/project-5.jpeg",
            title: "Real-Time Collaboration Tool",
            description: "Build a tool that enables real-time collaboration on documents or projects, similar to Google Docs, allowing multiple users to edit and comment simultaneously."
        },
        {
            imgsrc: "/src/assets/projects-imgs/project-6.png",
            title: "Health and Fitness Tracking App",
            description: "Create a mobile or web application that allows users to track their health and fitness goals, monitor daily activities, and receive personalized workout and nutrition recommendations."
        },

    ]
    return (
        <>

            <div className="App">

                <header>
                    <div className="logo"> <img src="/src/assets/logo.png" alt="konoha logo" /> </div>

                    <nav>
                        <ul>
                            <li><a href="#" class='active'>Home</a></li>
                            <li><a href="#notification">Notification</a></li>
                            <li><a href="#student">Students</a></li>
                            <li><a href="#project">Projects</a></li>
                        </ul>

                        {/* <ul className='btn'>
                            <button>LogIn</button>
                            <button>Sign</button>   <--- We used it later||
                        </ul> */}
                    </nav>

                    <HeaderText />

                    <div id="hedbtn">
                        <div><AttendanceForm /></div>
                    </div>
                </header>
                <main>

                    <div id='notification' className="notification">
                        <Notifications cards={cards} interval={3000} />
                    </div>

                    <div id="student">
                        {studentsCard.map((student, index) => (
                            <Students key={index} student={student} />
                        ))}
                    </div>

                    <div id="project">
                        <Projects projectCard={projectCard} />
                    </div>
                </main>

                {showScrollButton && (
                    <button className="scroll-to-top" onClick={scrollToTop}>
                        ↑
                    </button>
                )}

                <footer>
                    <Footer />
                </footer>

            </div>

        </>
    )
}

export default App
