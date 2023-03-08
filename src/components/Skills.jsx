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
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: node,
            title: 'Node',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: sequelize,
            title: 'Sequelize',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-orange-500'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: react,
            title: 'React',
            style: 'shadow-orange-500'
        },
        {
            id: 10,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-orange-500'
        },
        {
            id: 11,
            src: github,
            title: 'Github',
            style: 'shadow-orange-500'
        },
        {
            id: 12,
            src: heroku,
            title: 'Heroku',
            style: 'shadow-orange-500'
        },
    ]
  return (
    <div name='skills' className='bg-black w-full text-white md:h-screen'>
        <div className='mx-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
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