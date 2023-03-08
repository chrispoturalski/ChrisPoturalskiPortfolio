import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import sequelize from '../assets/sequelize.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import mysql from '../assets/mysql.png'
import node from '../assets/node.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import heroku from '../assets/heroku.png'
import mongodb from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'


const Skills = () => {

    const skill = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-red-600'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-cyan-700'
        },
        {
            id: 5,
            src: node,
            title: 'Node',
            style: 'shadow-emerald-600'
        },
        {
            id: 6,
            src: sequelize,
            title: 'Sequelize',
            style: 'shadow-indigo-900'
        },
        {
            id: 7,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-violet-600'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: react,
            title: 'React',
            style: 'shadow-black-500'
        },
        {
            id: 10,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-slate-900'
        },
        {
            id: 11,
            src: github,
            title: 'Github',
            style: 'shadow-gray-500'
        },
        {
            id: 12,
            src: heroku,
            title: 'Heroku',
            style: 'shadow-violet-900'
        },
    ]
  return (
    <div name='skills' className='bg-gradient-to-b from-sky-400 to-blue-700 w-full text-white md:h-screen'>
        <div className='mx-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>Here are the skills that I have used in my projects</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skill.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duation-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='mx-auto h-20 w-20' />
                            <p className='mt-4'>{title}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills