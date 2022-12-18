import Fade from 'react-reveal/Fade';
import React from 'react'
import Zoom from'react-reveal/Zoom';

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
        
            <div className='text-center'>
               <Zoom left cascade> <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2></Zoom>
             <Fade right cascade>   <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p></Fade>
            </div>
        
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <Fade left>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                </Fade>
                <Fade up>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                </Fade>
                <Fade right>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default About