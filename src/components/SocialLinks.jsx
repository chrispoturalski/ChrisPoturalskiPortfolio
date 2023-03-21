import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/chrispoturalski',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/chris-poturalski-2a8997118/'
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:chrispoturalski0689@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Poturalski-Resume.pdf',
            style: 'rounded-tr-md',
            download: true,
        }
    ]
        
    return (   
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style}) => (
                <li 
                    key={id} 
                    className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'
                    + ' ' + style}>
                    <a href={href} className='flex justify-between items-center w-full text-white'>
                        {child}
                    </a>
                </li>


            ))}

        </ul>
    </div>
  )
}

export default SocialLinks