import React from 'react';
import { MdOutlineArrowForward } from "react-icons/md";
import DoctorImage2 from "../../assets/images/doctor_02.png";
import { IoArrowForwardOutline } from "react-icons/io5";
export const Future = () => {
    return (
        <div className='bg-white'>
            <div className='container'>
                {/* Section 1 */}
                <div className='grid grid-cols-2 my-40'>
                    {/* Conent text sectionz */}
                    <div>
                        <h1 className='text-5xl font-bold'>
                            The Future <br/>
                            of <span className='text-primary'>Quality Health</span>
                        </h1>
                        <div className='flex flex-col gap-2 mt-8 mb-4'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nec risus feugiat lectus risus sed ullamcorper. Auctor semper 
                                fermentum volutpat integer vel. In rhoncus elementum nunc, 
                                malesuada mi sed. Nibh est sit lobortis id semper.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nec risus feugiat lectus risus sed ullamcorper. Auctor 
                                semper fermentum volutpat integer vel. In rhoncus elementum 
                                nunc, malesuada mi sed. Nibh est sit lobortis id semper.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nec risus feugiat lectus risus sed ullamcorper. 
                                sed. Nibh est sit lobortis id semper.
                            </p>
                        </div>
                        <div className='flex items-center gap-1 text-primary font-semibold'>
                            <p>Learn More</p>
                            <MdOutlineArrowForward/>
                        </div>
                    </div>
                    {/* Image section */}
                    <div>
                        <img src={DoctorImage2} alt="" />
                    </div>
                </div>
                {/* Section 2 */}
                <div className='bg-primary rounded-3xl mb-40'>
                    <div className='text-white py-12'>
                        <h1 className='text-center text-3xl font-bold py-4'>Subscribe To Our Newsletter</h1>
                        <div className='bg-white mx-32 my-4 rounded-3xl flex items-center justify-end px-2'>
                            <div className='bg-primary text-white my-2 p-3 rounded-full hover:scale-105 duration-200 transform cursor-pointer'>
                                <IoArrowForwardOutline className=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
