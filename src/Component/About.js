import React from 'react'
import john from './image/CBE-logo-2018.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Compare</h2>
                    <p>Compare</p>
                    <button className='button'>Download</button>
                </div>
            </div>
        </div>
    )
}

export default About
