
import React from 'react';

export default function PortfolioItem({ title, imgURL, techstack, link }) {
    return (
        <a className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden drop-shadow-md duration-300 hover:scale-125 hover:z-10'
            href={link}
            target='_blank'
            rel='noreferrer noopener'>
            <img className='w-full h-36 md:h-48 object-cover cursor-pointer'
                src={imgURL}
                alt='Portfolio Item Image' />
            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold transition duration-300'>
                    {title}
                </h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-s dark:text-white'>
                    {techstack.map(item => (
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md transition duration-300'>
                        {item}
                    </span>
                    ))}
                </p>
            </div>
        </a>
        
    )
}