
import React from 'react';

export default function Title({ children, id }) {
    return (
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white drop-shadow-md transition duration-300'
            id={id && id}>
            {children}
        </h1>
    )
}
