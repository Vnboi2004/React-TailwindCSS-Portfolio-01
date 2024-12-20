import React from 'react';
import user_1 from '../../assets/images/user_01.png';
import user_2 from '../../assets/images/user_02.png';
import user_3 from '../../assets/images/user_03.png';
import user_4 from '../../assets/images/user_04.png';
import user_5 from '../../assets/images/user_05.png';
import user_6 from '../../assets/images/user_06.png';
import { TiStarFullOutline } from "react-icons/ti";
export const About = () => {
  return (
    <div className='bg-[#E1EEFF]'>
        <div className='container'> 
            <div className='grid grid-cols-2'>
                {/* Review section */}
                <div className='flex flex-col gap-6 my-48'>
                    <h1 className='text-5xl font-bold'>
                        What <span className='text-primary'>Our Member’s</span> <br/>
                        Saying About Us
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sem velit viverra amet faucibus.</p>
                    <div className=' flex items-center gap-6'>
                        <div className='flex items-center space-x-[-9px]'>
                            <img src={user_1} alt="" className=''/>
                            <img src={user_2} alt="" className=''/>
                            <img src={user_3} alt="" className=''/>
                            <img src={user_4} alt="" className=''/>
                            <img src={user_5} alt="" className=''/>
                            <img src={user_6} alt="" className=''/>
                        </div>
                        <p className='font-semibold'>100+ Review</p>
                    </div>
                </div>
                {/* Comment section */}
                <div className='bg-white border-2 border-gray-400/50 my-48 mx-10 rounded-2xl'>
                    <div className='p-12'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4 mb-12'>
                                <img src={user_4} alt="" />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-[1.1rem] leading-4 font-semibold'>Jane Cooper</h3>
                                    <p>12/4/17</p>
                                </div>
                            </div>
                            <div className='flex text-3xl items-center'>
                                <TiStarFullOutline className='text-[#F5BF00]'/>
                                <TiStarFullOutline className='text-[#F5BF00]'/>
                                <TiStarFullOutline className='text-[#F5BF00]'/>
                                <TiStarFullOutline className='text-[#F5BF00]'/>
                                <TiStarFullOutline className='text-[#F5BF00]'/>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
