import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import reactLogo from '../assets/React.png'
import ruby from '../assets/ruby.png'
import rails from '../assets/rails.png'
import mysql from '../assets/Mysql_logo.png'
import git from '../assets/git.png'
import github from '../assets/github.png'




function Skills() {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactLogo,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: ruby,
            title: "Ruby",
            style: "shadow-green-400",
        },
        {
            id: 6,
            src: rails,
            title: " Rails",
            style: "shadow-white",
        },
        {
            id: 7,
            src: mysql,
            title: "Mysql",
            style: "shadow-pink-400",
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 9,
            src: git,
            title: "Git",
            style: "shadow-sky-400",
        },

    ];

    return (
        <div
            name="experience"
            className=""
        >
            <div className="skills-section">
                <div className='skills-heading'>
                    <br />
                    <p className="skills-header">
                        Skills
                    </p>
                    <p className="skills-about">These are the technologies and tools I've worked with and used them in my projects.</p>
                </div>


                <div className="card-container">

                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className="card"
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills