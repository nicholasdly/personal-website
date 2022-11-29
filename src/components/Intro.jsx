
import React from 'react';

export default function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl sm:text-7xl md:text-7xl mb-1 sm:mb-3 md:mb-3 font-bold drop-shadow-lg transition duration-300 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text p-2'>
                Nicholas Ly
            </h1>
            <p className='text-base sm:text-xl md:text-xl mb-3 font-semibold drop-shadow-md '>
                Software Engineer & Web Developer
            </p>
            <p className='text-md max-w-xl mb-6 font-medium drop-shadow-md'>
                I'm an undergraduate research software engineer for the {}
                <a className='bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'
                    href='https://msuaided.com/'
                    target='_blank'
                    rel='noreferrer noopener'>AIDED</a>
                {} software team, and an incoming {}
                <a className='bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'
                    href='https://www.ostusa.com/'
                    target='_blank'
                    rel='noreferrer noopener'>OST</a>
                {} web development intern! Whether it's professional or personal, I
                love surrounding myself with great people who I can learn and collaborate with.
                I'm passionate about expanding my skillset, and I'm driven to make my mark on the
                world through my work.
            </p>
        </div>
    )
}
