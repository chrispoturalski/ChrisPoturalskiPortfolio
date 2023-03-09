import React from 'react'
import CSVReader from '../assets/portfolio/CSVReader.png'
import MovieReview from '../assets/portfolio/MovieReview.png'
import eCommerce from '../assets/portfolio/eCommerce.png'
import SocialMediaAPI from '../assets/portfolio/SocialMediaAPI.png'
import VideoGame from '../assets/portfolio/VideoGame.png'
import WeatherApp from '../assets/portfolio/WeatherApp.png'


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: CSVReader,
            title: 'CSV Reader',
            demo: 'https://chrispoturalski.github.io/CSVReader/',
            github: 'https://github.com/chrispoturalski/CSVReader'
        },
        {
            id: 2,
            src: MovieReview,
            title: 'Movie Review Site',
            demo: 'https://chrispoturalski.github.io/MovieReviewSite/',
            github: 'https://github.com/chrispoturalski/MovieReviewSite'
        },
        {
            id: 3,
            src: eCommerce,
            title: 'eCommerce Backend App',
            demo: 'https://drive.google.com/file/d/1rJa8-62KcfOCRq8XBLkMuvFt-xVcWWQb/view',
            github: 'https://github.com/chrispoturalski/eCommerce-desktop'
        },
        {
            id: 4,
            src: SocialMediaAPI,
            title: 'Social Media Backend',
            demo: 'https://drive.google.com/file/d/10vhNFfbVUOzNAKCJKd1-55ggSBbqXfMd/view',
            github: 'https://github.com/chrispoturalski/Social-Network-Api'
        },
        {
            id: 5,
            src: VideoGame,
            title: 'Video Game Application',
            demo: 'https://isgame-true.herokuapp.com/',
            github: 'https://github.com/chrispoturalski/project2-video-game'
        },
        {
            id: 6,
            src: WeatherApp,
            title: 'Weather App',
            demo: 'https://chrispoturalski.github.io/weather-api/',
            github: 'https://github.com/chrispoturalski/weather-api'
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
                portfolio.map(({id, src, title, demo, github}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 object-cover h-48 w-96' />
                            <h2 className='flex items-center justify-center py-2'>{title}</h2>
                            <div className='flex items-center justify-center'>
                                <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200'>Demo</a>
                                <a href={github} className='w-1/2 px-6 py-3 m-4 duration-200'>Code</a>
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