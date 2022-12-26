import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <div className='nav-logo'>
                        <Link exact to="/" className="nav-logo">
                            MercyK</Link>

                    </div>

                    <div className='nav-links'>
                        <ul>
                            <li className='nav-links'><Link className='links' to="/">Home</Link></li>
                            <li className='nav-links'><Link className='links' to="/about">About</Link></li>
                            <li className='nav-links'><Link className='links' to="/skills">SKills</Link></li>
                            <li className='nav-links'><Link className='links' to="/projects">Projects</Link></li>
                            <li className='nav-links'><Link className='links' to="/contact">Contact</Link></li>
                        </ul>

                    </div>


                </div>


            </nav>
        </>
    )
}

export default Navbar