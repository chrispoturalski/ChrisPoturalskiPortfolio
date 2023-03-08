import React from 'react'
import resume from '../assets/Resume.pdf'

const Resume = () => {
  return (
    <div name="resume" className='w-full h-screen bg-gradient-to-b from-blue-700 to-sky-400 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4'>Resume</h2>
            </div>

            <p className='text-xl mt-20'>
                Download my resume here
            </p>

            <br />

            <button className='color-white'>
                <a href={resume}></a>
            </button>
        </div>
    </div>
  )
}

export default Resume