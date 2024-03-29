import { ArrowSmRightIcon, PhoneIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import React from 'react';
import Zoom from'react-reveal/Zoom';
import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <Zoom left cascade><h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2></Zoom>
              <Zoom right cascade><h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3></Zoom>
              <Fade left cascade><p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p></Fade>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
             <Fade left>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                  <Flash forever> <p className='flex items-center cursor-pointer text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p></Flash>
                  </div>
              </div>
              </Fade>
              <Fade up>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                     <Flash forever> <p className='flex items-center cursor-pointer text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p></Flash>
                  </div>
              </div>
              </Fade>
              <Fade right>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                  <Flash forever> <p className='flex items-center cursor-pointer text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p></Flash>
                  </div>
              </div>
              </Fade>
          </div>
      </div>
  </div>
  );
};

export default Support;
