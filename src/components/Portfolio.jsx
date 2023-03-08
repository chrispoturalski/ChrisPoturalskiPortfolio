import React from 'react'
import CSVReader from '../assets/portfolio/CSVReader.png'
import MovieReview from '../assets/portfolio/MovieReview.png'
import PasswordGenerator from '../assets/portfolio/PasswordGenerator.png'
import SocialMediaAPI from '../assets/portfolio/SocialMediaAPI.png'
import VideoGame from '../assets/portfolio/VideoGame.png'
import WeatherApp from '../assets/portfolio/WeatherApp.png'


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: CSVReader
        },
        {
            id: 2,
            src: MovieReview
        },
        {
            id: 3,
            src: PasswordGenerator
        },
        {
            id: 4,
            src: SocialMediaAPI
        },
        {
            id: 5,
            src: VideoGame
        },
        {
            id: 6,
            src: WeatherApp
        },
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-blue-700 to-sky-400 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolio.map(({id, src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 object-cover h-48 w-96' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>Code</button>
                            </div>
                        </div>
                ))
            }

            </div>

        </div>
    </div>
  )
}

export default Portfolio