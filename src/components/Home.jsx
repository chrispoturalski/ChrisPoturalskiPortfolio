import React from 'react'
import HeroImage from "../assets/heroimage.png"
import {RiArrowRightCircleFill} from "react-icons/ri"

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-white py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus explicabo doloremque quos quis porro exercitationem, mollitia ad odio quod labore? Recusandae quaerat voluptatem quae consectetur sapiente dignissimos modi veritatis?
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                        <RiArrowRightCircleFill  size={15} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="My profile pic" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>

  )
}

export default Home