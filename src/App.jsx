import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Navbar } from './Components/Navbar';
import AttendanceForm from './Components/AttendanceForm'
import Notifications from './Components/Notifications';
import HeaderText from './Components/HeaderText'
import { Students } from './Components/students/Students';
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
    // const router = createBrowserRouter([
    //     {
    //         path:"/",
    //         element: <Navbar/> 
    //     },
    //     {}
    // ])
    
    // StudentCards\\
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
                            <li><a href="#">Projects</a></li>
                        </ul>

                        {/* <ul className='btn'>
                            <button>LogIn</button>
                            <button>Sign</button>
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
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>

        </>
    )
}

export default App
