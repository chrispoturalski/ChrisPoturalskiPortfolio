import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-sky-400 to-blue-700 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4'>About</h2>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam alias consequuntur? Vero autem, sunt adipisci numquam officia quod ea provident quisquam minima repudiandae, cupiditate, iusto sequi ipsum aperiam rerum?
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi, accusamus neque numquam officia odio est quos laudantium earum sequi iste, exercitationem, aspernatur esse assumenda magni perferendis dolorum perspiciatis impedit?
            </p>
        </div>
    </div>
  )
}

export default About