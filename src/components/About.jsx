import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-sky-400 to-blue-700 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4'>About</h2>
            </div>

            <p className='text-xl mt-20'>
            I am a current student at University of California, Irvine studying
full stack development through a weeknight bootcamp. In the
duration of my bootcamp experience, I have developed a sense of
what is required in the fast paced environment that this role would
be in. I am passionate for the industry and know I can excel and
adapt to new technologies. I collaborate well with my peers,
exemplify quick learning capabilities, and have a comprehensive
set of skills to execute any tasks at hand.            </p>

            <br />

            <p className='text-xl'>
            </p>
        </div>
    </div>
  )
}

export default About