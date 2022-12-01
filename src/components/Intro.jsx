
import React from 'react';

export default function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl sm:text-7xl md:text-7xl mb-1 sm:mb-3 md:mb-3 font-bold drop-shadow-lg transition duration-300 bg-gradient-to-r from-cyan-500 via-indigo-500 to-red-500 text-transparent bg-clip-text p-2'>
                Nicholas Ly
            </h1>
            <p className='text-base dark:text-white sm:text-xl md:text-xl mb-3 font-semibold drop-shadow-md duration-300'>
                Undergraduate Software Engineer & Web Developer
            </p>
            <p className='text-md max-w-xl mb-6 font-medium drop-shadow-md'>
                I'm a computer science undergraduate at {}
                <a className='text-green-500 dark:text-green-400 duration-300'
                    href='https://msu.edu/'
                    target='_blank'
                    rel='noreferrer noopener'>Michigan State University</a>
                {}, and
                a software engineer and web developer for {}
                <a className='text-violet-500 dark:text-violet-400 duration-300'
                    href='https://msuaided.com/'
                    target='_blank'
                    rel='noreferrer noopener'>AIDED</a>
                {}. Whether it's professional or personal, I
                love surrounding myself with great people who I can learn and collaborate with.
                Take a look at my work below, and send me a message if you'd like to get in touch!
            </p>
        </div>
    )
}
