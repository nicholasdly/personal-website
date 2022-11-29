
import React from 'react';

export default function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl sm:text-7xl md:text-7xl dark:text-white mb-1 sm:mb-3 md:mb-3 font-bold'>
                Nicholas Ly
            </h1>
            <p className='text-base sm:text-xl md:text-xl mb-3 font-semibold'>
                Software Engineer & Web Developer
            </p>
            <p className='text-md max-w-xl mb-6 font-medium'>
                I'm an undergraduate research software engineer for the {}
                <a className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    href='https://msuaided.com/'
                    target='_blank'
                    rel='noreferrer noopener'>AIDED</a>
                {} software team, and an incoming {}
                <a className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    href='https://www.ostusa.com/'
                    target='_blank'
                    rel='noreferrer noopener'>OST</a>
                {} web development intern! Whether its professional or personal, I
                love surrounding myself with great people who I can learn and collaborate with.
                I'm passionate about expanding my skillset, and I'm driven to make my mark on the
                digital world through my work.
            </p>
        </div>
    )
}
