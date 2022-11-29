
import React from 'react';

export default function TimelineItem({ year, title, duration, details }) {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 drop-shadow-sm transition duration-300 group'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full -left-1.5 mt-1.5 border border-white dark:border-stone-900 dark:bg-stone-700 transition duration-300 group-hover:scale-150 group-hover:bg-stone-900 dark:group-hover:bg-stone-100' />   
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900 dark:text-stone-900 dark:bg-white rounded-md transition duration-300'>
                        {year}
                    </span>
                    <h3 className='text-lg font-semibold dark:text-white transition duration-300'>
                        {title}
                    </h3>
                    <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                    {details}
                </p>
            </li>
        </ol>
    )
}
