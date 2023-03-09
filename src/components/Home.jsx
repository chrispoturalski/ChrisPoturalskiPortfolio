import React from 'react'
import HeroImage from "../assets/heroimage.png"


const Home = () => {

  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-blue-700 to-sky-400'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-white py-4 max-w-md'>
Welcome to my portfolio website! My name is Chris Poturalski and I am an aspiring Full Stack Developer 
looking to gain professional work experience. Please check out my portfolio website where you will find my skills, portfolio, and social links!               </p>
            </div>

            <div>
                <img src={HeroImage} alt="My profile pic" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>

  )
}

export default Home