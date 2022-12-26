import React from 'react'
import { Link } from 'react-router-dom'
// import heroimg from '../assets/workspace-1280538__340.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'


function Home() {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi,<br />I'm <br />Mercy Kamene <br /> Web developer

                    {/* <img src={heroimg} alt="" className='heroimage' /> */}
                </h1>
                <h2>JavaSript|ReactJS|Ruby|Ruby on Rails</h2>


                <div className='home-icons'>
                    <h1 className='social-icons'>
                        <a
                            href="https://github.com/beebus"
                            target="_blank"
                            rel="noreferrer"
                            className="  home-social-icons"
                        >
                            <BsLinkedin />
                        </a>

                    </h1>
                    <h1 className='social-icons'>
                        <a
                            href="https://github.com/beebus"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <BsGithub />
                        </a>

                    </h1>
                    <h1 className='social-icons'>
                        <a
                            href="https://github.com/beebus"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <BsTwitter />
                        </a>

                    </h1>
                </div>
                <Link to="/contact" className='flat-btn'>contact Me</Link>

            </div>






        </div>
    )
}

export default Home