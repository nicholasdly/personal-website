
import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

export default function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                {portfolio.map(project => (
                    <PortfolioItem
                        imgURL={project.imgURL}
                        title={project.title}
                        techstack={project.techstack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}
