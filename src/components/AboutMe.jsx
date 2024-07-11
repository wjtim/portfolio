import React from 'react'
import TiltCardCarousel from './TiltCardCarousel'
import ActivityCarousel from './ActivityCarousel'

const AboutMe = () => {
  return (
    <div>
    <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> Who I am:"} </div>
    <div className="text-m font-mono px-10 my-3 text-center"> I'm a <strong className='text-orange-500'>BSc Computer Science Major</strong> from the University of Victoria. </div>
    <div className="text-m font-mono px-10 my-3 text-center"> I have a passion for development using <strong className='text-yellow-500'>Javascript</strong>, <strong className='text-blue-500'>Python</strong>, and much more. </div>
    <div className="text-m font-mono px-10 my-3 text-center"> My favourite thing about software development is that it allows for both a <strong className='text-orange-500'>creative</strong> and <strong className='text-orange-500'>critical thinking</strong> outlet. </div>
    <div className="text-m font-mono px-10 my-3 text-center"> I also love working with <strong className='text-orange-500'>data visualisation</strong> as well as in <strong className='text-orange-500'>accessible design</strong>. </div>
    <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> What I've been up to:"} </div>
    <ActivityCarousel />
    <div className="text-2xl font-mono pr-1 my-3 mx-3"> {"> What I've been playing:"} </div>
    <TiltCardCarousel />
    </div>
  )
}

export default AboutMe
