import React from 'react'
import '/src/App.css'

export const Navbar = () => {
  return (
    <nav>
                        <ul>
                            <li><Link to="/" class='active'>Home</Link></li>
                            <li><Link to="/Notification">Notification</Link></li>
                            <li><Link to="#">Student</Link></li>
                            <li><Link to="#">Projects</Link></li>
                        </ul>

                        {/* <ul className='btn'>
                            <button>LogIn</button>
                            <button>Sign</button>
                        </ul> */}
                    </nav>
  )
}
